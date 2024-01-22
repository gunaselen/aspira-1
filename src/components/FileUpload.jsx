import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const FileUpload = () => {
  const { control, setValue } = useForm();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Check if the selected file is a PDF
    if (file && file.type === 'application/pdf') {
      setValue('file', file);
    } else {
      setValue('file', null);
      // Optionally, you can display an error message or take other actions
      console.error('Please choose a valid PDF file.');
    }
  };

  const handleRemoveFile = () => {
    setValue('file', null);
  };

  return (
    <div>
      <label>Choose PDF File:</label>
      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
      />

      <Controller
        name="file"
        control={control}
        defaultValue={null}
        render={({ field }) => (
          <div>
            {field.value && (
              <div>
                <p>Selected File: {field.value.name}</p>
                <button type="button" onClick={handleRemoveFile}>
                  Remove File
                </button>
              </div>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default FileUpload;