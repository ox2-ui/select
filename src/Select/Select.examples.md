
### Basic -- Single

    const Groups = [
      { label: 'Speakers', value: 'speakers' },
      { label: 'Attendies', value: 'attendies' },
      { label: 'Moderators', value: 'moderators' },
    ];

    const handleUpdate = (value) => console.log('🐳', value);

    <Select
      onUpdate={handleUpdate}
      options={Groups}
      placeholder={'Select something'}
    />

### Basic -- Multi

    const Groups = [
      { label: 'Speakers', value: 'speakers' },
      { label: 'Attendies', value: 'attendies' },
      { label: 'Moderators', value: 'moderators' },
    ];

    const handleUpdate = (value) => console.log('🐳', value);

    <Select
      multi={true}
      onUpdate={handleUpdate}
      options={Groups}
      placeholder={'Select something'}
      simpleValue={true}
    />

### Has validation error

    const Groups = [
      { label: 'Speakers', value: 'speakers' },
      { label: 'Attendies', value: 'attendies' },
      { label: 'Moderators', value: 'moderators' },
    ];

    const handleUpdate = (value) => console.log('🐳', value);

    <Select
      hasError={true}
      onUpdate={handleUpdate}
      options={Groups}
      placeholder={'Select something'}
    />

### No clear button

    const Groups = [
      { label: 'Speakers', value: 'speakers' },
      { label: 'Attendies', value: 'attendies' },
      { label: 'Moderators', value: 'moderators' },
    ];

    const handleUpdate = (value) => console.log('🐳', value);

    <Select
      clearable={false}
      onUpdate={handleUpdate}
      options={Groups}
      value={'attendies'}
    />

### Type: value-styled -- Single

    const textTransform = [
      { label: 'None', value: 'none' },
      { label: 'Capitalize', value: 'capitalize' },
      { label: 'Uppercase', value: 'uppercase' },
      { label: 'Lowercase', value: 'lowercase' },
    ];

    const handleUpdate = (value) => console.log('🐳', value);

    <Select
      onUpdate={handleUpdate}
      options={textTransform}
      placeholder={'Text transform'}
      styledProperty={'textTransform'}
      type={'value-styled'}
    />

### Type: colored -- Single

    const StatusLabels = [
      { label: 'Published', value: 'published', color: '#28af60' },
      { label: 'Rejected', value: 'rejected', color: '#bf3a2b' },
      { label: 'Pending', value: 'pending', color: '#f39c12' },
    ];

    const handleUpdate = (value) => console.log('🐳', value);

    <Select
      onUpdate={handleUpdate}
      options={StatusLabels}
      placeholder={'Filter by status'}
      type={'colored'}
    />

### Type: colored -- Multi

    const StatusLabels = [
      { label: 'Published', value: 'published', color: '#28af60' },
      { label: 'Rejected', value: 'rejected', color: '#bf3a2b' },
      { label: 'Pending', value: 'pending', color: '#f39c12' },
    ];

    const handleUpdate = (value) => console.log('🐳', value);

    <Select
      multi={true}
      onUpdate={handleUpdate}
      options={StatusLabels}
      placeholder={'Filter by status'}
      simpleValue={true}
      type={'colored'}
    />

### Type: colored-circle -- Single

    const Categories = [
      { label: 'Sessions', value: 'session', color: '#3598D8' },
      { label: 'Breaks', value: 'break', color: '#2CAF65' },
      { label: 'Workshops', value: 'workshop', color: '#F29C2F' },
    ];

    const handleUpdate = (value) => console.log('🐳', value);

    <Select
      onUpdate={handleUpdate}
      options={Categories}
      placeholder={'Filter by category'}
      type={'colored-circle'}
    />

### Type: colored-circle -- Multi

    const Categories = [
      { label: 'Sessions', value: 'session', color: '#3598D8' },
      { label: 'Breaks', value: 'break', color: '#2CAF65' },
      { label: 'Workshops', value: 'workshop', color: '#F29C2F' },
    ];

    const handleUpdate = (value) => console.log('🐳', value);

    <Select
      multi={true}
      onUpdate={handleUpdate}
      options={Categories}
      placeholder={'Filter by category'}
      simpleValue={true}
      type={'colored-circle'}
    />

### Type: image -- Single

    const Apps = [
      { label: 'Aci', value: 'id1', image: 'http://imgur.com/N2LoYmv.png' },
      { label: 'NCS', value: 'id2', image: 'http://imgur.com/AN63ghL.png' },
      { label: 'IPE', value: 'id3', image: 'http://imgur.com/VMgTYTR.png' },
    ];

    const handleUpdate = (value) => console.log('🐳', value);

    <Select
      onUpdate={handleUpdate}
      options={Apps}
      placeholder={'Select app'}
      type={'image'}
    />

### Type: image -- Multi

    const Apps = [
      { label: 'Aci', value: 'id1', image: 'http://imgur.com/N2LoYmv.png' },
      { label: 'NCS', value: 'id2', image: 'http://imgur.com/AN63ghL.png' },
      { label: 'IPE', value: 'id3', image: 'http://imgur.com/VMgTYTR.png' },
    ];

    const handleUpdate = (value) => console.log('🐳', value);

    <Select
      multi={true}
      onUpdate={handleUpdate}
      options={Apps}
      placeholder={'Select app'}
      simpleValue={true}
      type={'image'}
    />

### Type: icon -- Single

    const Types = [
      { label: 'User', value: 'Tickets', icon: 'users2', iconColor: '#3498DB' },
      { label: 'Session', value: 'Sessions', icon: 'calendar-text', iconColor: '#3498DB' },
      { label: 'Sponsors & Exhibitors', value: 'Sponsors', icon: 'diamond4', iconColor: '#3498DB' },
      { label: 'General', value: 'all', icon: 'pencil3', iconColor: '#3498DB' },
    ];

    const handleUpdate = (value) => console.log('🐳', value);

    <Select
      onUpdate={handleUpdate}
      options={Types}
      placeholder={'Filter by note type'}
      type={'icon'}
    />

### Type: icon -- Multi

    const Types = [
      { label: 'User', value: 'Tickets', icon: 'users2', iconColor: '#3498DB' },
      { label: 'Session', value: 'Sessions', icon: 'calendar-text', iconColor: '#3498DB' },
      { label: 'General', value: 'all', icon: 'pencil3', iconColor: '#3498DB' },
    ];

    const handleUpdate = (value) => console.log('🐳', value);

    <Select
      multi={true}
      onUpdate={handleUpdate}
      options={Types}
      placeholder={'Filter by note type'}
      simpleValue={true}
      type={'icon'}
    />

### Type: icon -- Large icon

    const Types = [
      { label: 'User', value: 'Tickets', icon: 'users2', iconColor: '#3498DB' },
      { label: 'Session', value: 'Sessions', icon: 'calendar-text', iconColor: '#3498DB' },
      { label: 'Sponsors & Exhibitors', value: 'Sponsors', icon: 'diamond4', iconColor: '#3498DB' },
      { label: 'General', value: 'all', icon: 'pencil3', iconColor: '#3498DB' },
    ];

    const handleUpdate = (value) => console.log('🐳', value);

    <Select
      iconSize={'25px'}
      onUpdate={handleUpdate}
      options={Types}
      placeholder={'Filter by note type'}
      type={'icon'}
    />
