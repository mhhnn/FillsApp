import React, { useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { getTemplateIcon } from '../../utils/templateUtils';
import { getTemplateDetails } from '../../components/templates';
import { useFormDataContext } from '../../contexts/FormDataContext';

export default function Forms() {
  const router = useRouter();
  const { forms, getForms, loading } = useFormDataContext();
  const { refresh } = useLocalSearchParams();

  useEffect(() => {
    console.log('Forms component mounted or refresh triggered');
    getForms();
  }, [refresh]);

  useEffect(() => {
    console.log('Current forms:', JSON.stringify(forms, null, 2));
  }, [forms]);

  const handleFormPress = (formId) => {
    router.push({
      pathname: '/viewFilledForm',
      params: { formId }
    });
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {forms && forms.length > 0 ? (
          forms.map((form) => {
            console.log('Rendering form:', JSON.stringify(form, null, 2));
            const templateDetails = getTemplateDetails(form.templateCode);
            const patientName = form.data?.patientInfo?.fullName || 'Unnamed Patient';
            const formDate = new Date(parseInt(form.createdAt) * 1000).toLocaleDateString();

            return (
              <TouchableOpacity
                key={form.formId}
                style={styles.formCard}
                onPress={() => handleFormPress(form.formId)}
              >
                <View style={styles.formHeader}>
                  <Ionicons 
                    name={getTemplateIcon(form.templateCode)} 
                    size={24} 
                    color="#007AFF" 
                  />
                  <View style={styles.formInfo}>
                    <Text style={styles.patientName}>{patientName}</Text>
                    <Text style={styles.formType}>
                      {templateDetails?.title || form.templateCode}
                    </Text>
                    <Text style={styles.formDate}>{formDate}</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={24} color="#666666" />
                </View>
              </TouchableOpacity>
            );
          })
        ) : (
          <Text style={styles.emptyText}>No forms found</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  formHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  formInfo: {
    flex: 1,
    marginLeft: 12,
  },
  patientName: {
    fontSize: 16,
    fontFamily: 'outfit-medium',
    color: '#000000',
  },
  formType: {
    fontSize: 14,
    fontFamily: 'outfit-regular',
    color: '#666666',
    marginTop: 2,
  },
  formDate: {
    fontSize: 12,
    fontFamily: 'outfit-regular',
    color: '#999999',
    marginTop: 2,
  },
  emptyText: {
    fontFamily: 'outfit-regular',
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginTop: 20,
  }
}); 