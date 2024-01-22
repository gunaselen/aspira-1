import React, { useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';

const FileUploadForm = () => {
  const { control, handleSubmit, setValue, watch } = useForm();
  const fileInputRef = useRef(null);
  const file = watch('file');

  const onSubmit = (data) => {
    // Handle form submission logic
    console.log(data);
  };

  const onEditClick = () => {
    // Handle edit button click
    // Open file input dialog
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onRemoveClick = () => {
    // Handle remove button click
    // Reset the form value for the file input
    setValue('file', null);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Upload Image</label>
        <Controller
          name="file"
          control={control}
          defaultValue={null}
          render={({ field }) => (
            <input
              type="file"
              ref={fileInputRef}
              onChange={(e) => {
                const file = e.target.files[0];
                setValue('file', file);
              }}
            />
          )}
        />
      </div>
      {file && (
        <div>
          <img
            src={URL.createObjectURL(file)}
            alt="Uploaded"
            style={{ maxWidth: '100px', maxHeight: '100px' }}
          />
          <button type="button" onClick={onEditClick}>
            Edit
          </button>
          <button type="button" onClick={onRemoveClick}>
            Remove
          </button>
        </div>
      )}
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default FileUploadForm;
