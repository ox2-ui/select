### SelectField

    const Categories = [
      { label: 'Sessions', value: 'session', color: '#3598D8' },
      { label: 'Breaks', value: 'break', color: '#2CAF65' },
      { label: 'Workshops', value: 'workshop', color: '#F29C2F' },
    ];

    const handleUpdate = (value) => console.log('🐳', value);

    <SelectField
      options={Categories}
      onUpdate={handleUpdate}
      placeholder={'Filter by category'}
      type={'colored-circle'}
    />
