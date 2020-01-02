/**
 * A list of collections to create initially
 */
const COLLECTIONS = [
  {
    name: 'settings',
    documents: [{
      id: 'user',
      roles: [

        /**
         * List all users that should be created initially.
         * Initially created users can only login through
         * third party provides (google, facebook...).
         * If you want to create a user with email/password
         * add an account for him in Authentication in the
         * firebase dashboard.
         */
        {
          email: 'info@jaspero.co',
          role: 'admin'
        },
        {
          email: 'antonio.stipic2@gmail.com',
          role: 'admin'
        }
      ]
    }]
  },
  {
    name: 'roles',
    documents: [
      {
        id: 'admin',
        name: 'Admin',
        description: 'A user with access to all collections',
        createdOn: Date.now()
      },
      {
        id: 'user',
        name: 'User',
        description: 'A user with limited application access',
        createdOn: Date.now()
      }
    ]
  },
];

const MODULES = [
  {
    id: 'users',
    name: 'Users',
    description: 'App Users',
    authorization: {
      read: ['admin'],
      write: ['admin']
    },
    layout: {
      order: 0,
      editTitleKey: 'name',
      icon: 'supervised_user_circle',
      sort: {
        active: 'createdOn',
        direction: 'desc'
      },
      instance: {
        segments: [{
          fields: [
            '/createdOn',
            '/name',
            '/email'
          ]
        }]
      },
      table: {
        tableColumns: [
          {
            key: '/createdOn',
            label: 'Created On',
            pipe: ['date'],
            sortable: true
          },
          {
            key: '/name',
            label: 'Name'
          },
          {
            key: '/email',
            label: 'Email'
          }
        ]
      }
    },
    schema: {
      properties: {
        name: {
          type: 'string',
        },
        email: {
          type: 'number'
        },
        createdOn: {
          type: 'number'
        }
      }
    },
    definitions: {
      name: {
        label: 'Name'
      },
      email: {
        label: 'Email',
        component: {
          type: 'input',
          configuration: {
            type: 'email'
          }
        }
      },
      createdOn: {
        label: 'Created On',
        formatOnCreate: "(value) => value || Date.now()",
        hint: 'Set to todays date if left empty',
        component: {
          type: 'date',
          configuration: {
            format: 'number'
          }
        }
      }
    }
  },
  {
    id: 'roles',
    name: 'Roles',
    description: 'Collection of roles that can be assigned to users',
    authorization: {
      read: ['admin'],
      write: ['admin']
    },
    layout: {
      order: 1,
      editTitleKey: 'name',
      icon: 'vpn_key',
      sort: {
        active: 'createdOn',
        direction: 'desc'
      },
      instance: {
        segments: [{
          fields: [
            '/createdOn',
            '/name',
            '/description'
          ]
        }]
      },
      table: {
        tableColumns: [
          {
            key: '/createdOn',
            label: 'Created On',
            pipe: ['date'],
            sortable: true
          },
          {
            key: '/name',
            label: 'Name'
          },
          {
            key: '/description',
            label: 'Description'
          }
        ]
      }
    },
    schema: {
      properties: {
        name: {
          type: 'string',
        },
        description: {
          type: 'string',
        },
        createdOn: {
          type: 'number'
        }
      }
    },
    definitions: {
      createdOn: {
        label: 'Created On',
        formatOnCreate: "(value) => value || Date.now()",
        hint: 'Set to todays date if left empty',
        component: {
          type: 'date',
          configuration: {
            format: 'number'
          }
        }
      },
      name: {
        label: 'Name'
      },
      description: {
        label: 'Description',
        component: {
          type: 'textarea'
        }
      }
    }
  }
];

const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

/**
 * Add your firebase config
 */
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://mg-photography-98d6d.firebaseio.com'
});

async function exec() {
  const fStore = admin.firestore();

  for (const collection of COLLECTIONS) {
    for (const document of collection.documents) {

      const {id, ...data} = document;

      await fStore.collection(collection.name).doc(id).set(data);
    }
  }

  for (const module of MODULES) {

    const {id, ...data} = module;

    await fStore.collection('modules').doc(id).set({
      ...data,
      createdOn: Date.now()
    });
  }
}

exec()
  .then(() => {
    console.log('Setup completely successfully');
  })
  .catch(error => {
    console.error(error);
  });


