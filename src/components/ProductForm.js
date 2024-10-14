// src/components/ProductForm.js
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import API_BASE_URL from '../config'; // Import the API base URL

const ProductForm = () => {
  const initialValues = { name: '', description: '', price: '' };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    price: Yup.number().required('Required').positive('Must be positive'),
  });

  const handleSubmit = async (values) => {
    try {
      await axios.post(`${API_BASE_URL}/admin/products`, values);
      alert('Product created successfully!');
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Add New Product</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="space-y-4">
            <div>
              <label className="block">Product Name</label>
              <Field name="name" className="input" />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
            </div>
            <div>
              <label className="block">Description</label>
              <Field name="description" className="input" />
              {errors.description && touched.description ? <div>{errors.description}</div> : null}
            </div>
            <div>
              <label className="block">Price</label>
              <Field name="price" type="number" className="input" />
              {errors.price && touched.price ? <div>{errors.price}</div> : null}
            </div>
            <button type="submit" className="btn">
              Add Product
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProductForm;
