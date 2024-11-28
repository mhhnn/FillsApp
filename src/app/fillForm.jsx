import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { getTemplateComponent, getTemplateDetails } from '../components/templates';
import { useFormDataContext } from '../contexts/FormDataContext';

export default function FillForm() {
  const { templateId, formId, isEditing, initialData } = useLocalSearchParams();
  const router = useRouter();
  const { saveForm, updateForm, loading, error, clearError } = useFormDataContext();
  
  const [formData, setFormData] = useState(() => {
    if (initialData) {
      try {
        return JSON.parse(initialData);
      } catch (e) {
        console.error('Error parsing initial data:', e);
        return {};
      }
    }
    return {};
  });

  const handleSave = async () => {
    try {
      console.log('Saving form with data:', formData);
      
      const formPayload = {
        templateCode: templateId,
        data: formData
      };

      console.log('Form payload:', formPayload);

      if (isEditing && formId) {
        await updateForm(formId, formPayload);
      } else {
        await saveForm(formPayload);
      }

      // Navigate back to forms tab with refresh parameter
      router.push({
        pathname: '/(tabs)/forms',
        params: { refresh: Date.now() }
      });
    } catch (err) {
      Alert.alert('Error', 'Failed to save form');
      console.error('Save form error:', err);
    }
  };

  // Load existing form data if editing
  useEffect(() => {
    if (isEditing && formId) {
      const existingForm = filledFormsStore.getFormById(formId);
      if (existingForm) {
        setFormData(existingForm.data);
      }
    }
  }, [formId, isEditing]);

  const TemplateComponent = getTemplateComponent(templateId);
  const templateDetails = getTemplateDetails(templateId);

  if (!TemplateComponent) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Template not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.formContainer}>
        <TemplateComponent 
          isTemplate={false} 
          data={formData}
          onDataChange={setFormData}
        />
      </ScrollView>
      
      <TouchableOpacity 
        style={[styles.saveButton, loading && styles.saveButtonDisabled]}
        onPress={handleSave}
        disabled={loading}
      >
        <Text style={styles.saveButtonText}>
          {loading ? 'Saving...' : isEditing ? 'Update Form' : 'Save Form'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  formContainer: {
    flex: 1,
  },
  saveButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    margin: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonDisabled: {
    opacity: 0.5,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontFamily: 'outfit-medium',
    fontSize: 16,
  },
  errorText: {
    fontFamily: 'outfit-regular',
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginTop: 20,
  }
}); 