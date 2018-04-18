import React from 'react';
import { Alert } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'native-base';
import Kegiatan from './Kegiatan';
import DataMahasiswa from './DataMahasiswa';
import Home from './Home';
import LeftMenu from './LeftMenu';
import Login from './Login';
import InsertPresensi from './InsertPresensi';
import InsertData from './InsertData';
import UpdateKegiatan from './UpdateKegiatan';
import Detail from './Detail';
import UpdatePresensi from './UpdatePresensi';
import WebPti from './WebPti';
import WebUndiksha from './WebUndiksha';
import HapusPresensi from './HapusPresensi';
import UpdateData from './UpdateData';

export default class menu extends React.Component {

  render() {
    return (
      <Navigasi />
    );
  }
}

export const Navigasi = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    },
  },

  Home: {
    screen: TabNavigator({

      Home: {
        screen: Home,
        navigationOptions: {
          title: 'Home',

        },
      },
      // Kegiatan: {
      //   screen: Kegiatan,
      //   navigationOptions: {
      //     title: 'Presensi',
      //
      //   },
      // },
      DataMahasiswa: {
        screen: DataMahasiswa,
        navigationOptions: {
          title: 'Data Mahasiswa',
        },
      },
    },
      {
        tabBarOptions: {
          style: {
            backgroundColor: '#795548',
          },
          indicatorStyle: {
            backgroundColor: 'white'
          },
        }
      }
    ),
    navigationOptions: {
      headerLeft:
        <Icon
          name='menu'
          style={{ paddingLeft: 10, color: 'white' }}
          onPress={() => Alert.alert('Aplikasi ini dibuat untuk memenuhi UTS Matakuliah P. Mobile')}
        />,
      title: 'Data Mahasiswa',
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center'
      },
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#795548',
        elevation: 0, // untuk menghilangkan border (garis bawah) pada header
      },


    },
  },
  LeftMenu: {
    screen: LeftMenu,
    navigationOptions: {
      title: '',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#795548',
        //elevation: 0, // untuk menghilangkan border (garis bawah) pada header
      },
    },

  },
  InsertPresensi: {
    screen: InsertPresensi,
    navigationOptions: {
      title: 'Tambah Presensi',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#795548',
        //elevation: 0, // untuk menghilangkan border (garis bawah) pada header
      },
    },
   },
   UpdatePresensi: {
     screen: UpdatePresensi,
     navigationOptions: {
       title: 'Edit Presensi',
       headerTitleStyle: {
         fontWeight: 'bold',
       },
       headerTintColor: '#fff',
       headerStyle: {
         backgroundColor: '#795548',
         //elevation: 0, // untuk menghilangkan border (garis bawah) pada header
       },
     },
    },
    HapusPresensi: {
      screen: HapusPresensi,
      navigationOptions: {
        title: 'Hapus Presensi',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#795548',
          //elevation: 0, // untuk menghilangkan border (garis bawah) pada header
        },
      },
     },
   InsertData: {
     screen: InsertData,
     navigationOptions: {
       title: 'Tambah Data',
       headerTitleStyle: {
         fontWeight: 'bold',
       },
       headerTintColor: '#fff',
       headerStyle: {
         backgroundColor: '#795548',
         //elevation: 0, // untuk menghilangkan border (garis bawah) pada header
       },
     },
    },
    Detail: {
      screen: Detail,
      navigationOptions: {
        title: 'Detail',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#795548',
          //elevation: 0, // untuk menghilangkan border (garis bawah) pada header
        },
      },
     },
   UpdateKegiatan: {
     screen: UpdateKegiatan,
     navigationOptions: {
       title: 'Ubah Nama Kegiatan',
       headerTitleStyle: {
         fontWeight: 'bold',
       },
       headerTintColor: '#fff',
       headerStyle: {
         backgroundColor: '#795548',
         //elevation: 0, // untuk menghilangkan border (garis bawah) pada header
       },
     },
    },
    UpdateData: {
      screen: UpdateData,
      navigationOptions: {
        title: 'Ubah Data Mahasiswa',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#795548',
          //elevation: 0, // untuk menghilangkan border (garis bawah) pada header
        },
      },
     },
    WebPti: {
      screen: WebPti,
      navigationOptions: {
        title: 'Web PTI',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#795548',
          //elevation: 0, // untuk menghilangkan border (garis bawah) pada header
        },
      },
     },
     WebUndiksha: {
       screen: WebUndiksha,
       navigationOptions: {
         title: 'Web Undiksha',
         headerTitleStyle: {
           fontWeight: 'bold',
         },
         headerTintColor: '#fff',
         headerStyle: {
           backgroundColor: '#795548',
           //elevation: 0, // untuk menghilangkan border (garis bawah) pada header
         },
       },
      },

}
);
