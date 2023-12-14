/** @type {import('payload/types').CollectionConfig} */

const Lomba = {
  slug: 'Lomba', // Anda perlu menambahkan slug yang sesuai
  admin: {
    useAsTitle: 'name'
  },
  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'name',
      label: 'Nama',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'textarea',
      required: true,
    },
    {
      name: 'asalSekolah',
      label: 'Asal Sekolah',
      type: 'textarea',
      required: true
    },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      options: [
        {
            label: "Waiting",
            value: "waiting"
        },
        {
            label: "Rejected",
            value: "rejected"
        },
        {
            label: "Accepted",
            value: "accepted"
        }
      ],
      defaultValue: "waiting"
    },
    {
        name: "tanggal",
        label: "Tanggal",
        type: "date",
        required: true,
    },
  ],
};

export default Lomba;
