import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Table, Row} from 'react-native-table-component';

const data = [
  {
    _id: '644c0934e419a2beffdba3a9',
    user: {
      _id: '63f26de82f652e4ae7e0a8b9',
      firstname: 'IT',
      lastname: 'Admin',
      email: 'admin@sms.com',
    },
    standard: {_id: '63f3b429ac8cdcf5d564d9d4', standard: 'STD-2'},
    subject: 'History',
    createdAt: '2023-04-28T17:58:12.390Z',
    updatedAt: '2023-04-28T17:58:12.390Z',
    __v: 0,
  },
  {
    _id: '644c096ce419a2beffdba3f7',
    user: {
      _id: '63f26de82f652e4ae7e0a8b9',
      firstname: 'IT',
      lastname: 'Admin',
      email: 'admin@sms.com',
    },
    standard: {_id: '63f3b42dac8cdcf5d564d9df', standard: 'STD-3'},
    subject: 'Hindi',
    createdAt: '2023-04-28T17:59:08.617Z',
    updatedAt: '2023-04-28T17:59:08.617Z',
    __v: 0,
  },
  {
    _id: '644c093ce419a2beffdba3b7',
    user: {
      _id: '63f26de82f652e4ae7e0a8b9',
      firstname: 'IT',
      lastname: 'Admin',
      email: 'admin@sms.com',
    },
    standard: {_id: '63f3b429ac8cdcf5d564d9d4', standard: 'STD-2'},
    subject: 'English',
    createdAt: '2023-04-28T17:58:20.041Z',
    updatedAt: '2023-04-28T17:58:20.041Z',
    __v: 0,
  },
  {
    _id: '644c09bce419a2beffdba495',
    user: {
      _id: '63f26de82f652e4ae7e0a8b9',
      firstname: 'IT',
      lastname: 'Admin',
      email: 'admin@sms.com',
    },
    standard: {_id: '63f9bf96b0cd87d827109a8b', standard: 'STD-5'},
    subject: 'English',
    createdAt: '2023-04-28T18:00:28.216Z',
    updatedAt: '2023-04-28T18:00:28.216Z',
    __v: 0,
  },
  {
    _id: '644c0941e419a2beffdba3c5',
    user: {
      _id: '63f26de82f652e4ae7e0a8b9',
      firstname: 'IT',
      lastname: 'Admin',
      email: 'admin@sms.com',
    },
    standard: {_id: '63f3b429ac8cdcf5d564d9d4', standard: 'STD-2'},
    subject: 'Hindi',
    createdAt: '2023-04-28T17:58:25.174Z',
    updatedAt: '2023-04-28T17:58:25.174Z',
    __v: 0,
  },
  {
    _id: '644c097fe419a2beffdba42f',
    user: {
      _id: '63f26de82f652e4ae7e0a8b9',
      firstname: 'IT',
      lastname: 'Admin',
      email: 'admin@sms.com',
    },
    standard: {_id: '63f3b42dac8cdcf5d564d9df', standard: 'STD-3'},
    subject: 'Maths',
    createdAt: '2023-04-28T17:59:27.014Z',
    updatedAt: '2023-04-28T17:59:27.014Z',
    __v: 0,
  },
  {
    _id: '644c0991e419a2beffdba44f',
    user: {
      _id: '63f26de82f652e4ae7e0a8b9',
      firstname: 'IT',
      lastname: 'Admin',
      email: 'admin@sms.com',
    },
    standard: {_id: '63f9bf90b0cd87d827109a80', standard: 'STD-4'},
    subject: 'History',
    createdAt: '2023-04-28T17:59:45.525Z',
    updatedAt: '2023-04-28T17:59:45.525Z',
    __v: 0,
  },
  {
    _id: '644c09ace419a2beffdba479',
    user: {
      _id: '63f26de82f652e4ae7e0a8b9',
      firstname: 'IT',
      lastname: 'Admin',
      email: 'admin@sms.com',
    },
    standard: {_id: '63f9bf90b0cd87d827109a80', standard: 'STD-4'},
    subject: 'Science',
    createdAt: '2023-04-28T18:00:12.008Z',
    updatedAt: '2023-04-28T18:00:12.008Z',
    __v: 0,
  },
  {
    _id: '644c09cde419a2beffdba4bf',
    user: {
      _id: '63f26de82f652e4ae7e0a8b9',
      firstname: 'IT',
      lastname: 'Admin',
      email: 'admin@sms.com',
    },
    standard: {_id: '63f9bf96b0cd87d827109a8b', standard: 'STD-5'},
    subject: 'Science',
    createdAt: '2023-04-28T18:00:45.603Z',
    updatedAt: '2023-04-28T18:00:45.603Z',
    __v: 0,
  },
  {
    _id: '644c09c1e419a2beffdba4a3',
    user: {
      _id: '63f26de82f652e4ae7e0a8b9',
      firstname: 'IT',
      lastname: 'Admin',
      email: 'admin@sms.com',
    },
    standard: {_id: '63f9bf96b0cd87d827109a8b', standard: 'STD-5'},
    subject: 'Hindi',
    createdAt: '2023-04-28T18:00:33.440Z',
    updatedAt: '2023-04-28T18:00:33.440Z',
    __v: 0,
  },
  {
    _id: '644c09b7e419a2beffdba487',
    user: {
      _id: '63f26de82f652e4ae7e0a8b9',
      firstname: 'IT',
      lastname: 'Admin',
      email: 'admin@sms.com',
    },
    standard: {_id: '63f9bf96b0cd87d827109a8b', standard: 'STD-5'},
    subject: 'History',
    createdAt: '2023-04-28T18:00:23.352Z',
    updatedAt: '2023-04-28T18:00:23.352Z',
    __v: 0,
  },
  {
    _id: '644c090ce419a2beffdba363',
    user: {
      _id: '63f26de82f652e4ae7e0a8b9',
      firstname: 'IT',
      lastname: 'Admin',
      email: 'admin@sms.com',
    },
    standard: {_id: '63f3b424ac8cdcf5d564d9c9', standard: 'STD-1'},
    subject: 'History',
    createdAt: '2023-04-28T17:57:32.439Z',
    updatedAt: '2023-04-28T17:57:32.439Z',
    __v: 0,
  },
  {
    _id: '644c0975e419a2beffdba413',
    user: {
      _id: '63f26de82f652e4ae7e0a8b9',
      firstname: 'IT',
      lastname: 'Admin',
      email: 'admin@sms.com',
    },
    standard: {_id: '63f3b42dac8cdcf5d564d9df', standard: 'STD-3'},
    subject: 'English',
    createdAt: '2023-04-28T17:59:17.927Z',
    updatedAt: '2023-04-28T17:59:17.927Z',
    __v: 0,
  },
  {
    _id: '644c097ae419a2beffdba421',
    user: {
      _id: '63f26de82f652e4ae7e0a8b9',
      firstname: 'IT',
      lastname: 'Admin',
      email: 'admin@sms.com',
    },
    standard: {_id: '63f3b42dac8cdcf5d564d9df', standard: 'STD-3'},
    subject: 'Science',
    createdAt: '2023-04-28T17:59:22.487Z',
    updatedAt: '2023-04-28T17:59:22.487Z',
    __v: 0,
  },
  {
    _id: '644c09a7e419a2beffdba46b',
    user: {
      _id: '63f26de82f652e4ae7e0a8b9',
      firstname: 'IT',
      lastname: 'Admin',
      email: 'admin@sms.com',
    },
    standard: {_id: '63f9bf90b0cd87d827109a80', standard: 'STD-4'},
    subject: 'Maths',
    createdAt: '2023-04-28T18:00:07.121Z',
    updatedAt: '2023-04-28T18:00:07.121Z',
    __v: 0,
  },
  {
    _id: '644c098de419a2beffdba441',
    user: {
      _id: '63f26de82f652e4ae7e0a8b9',
      firstname: 'IT',
      lastname: 'Admin',
      email: 'admin@sms.com',
    },
    standard: {_id: '63f9bf90b0cd87d827109a80', standard: 'STD-4'},
    subject: 'Hindi',
    createdAt: '2023-04-28T17:59:41.235Z',
    updatedAt: '2023-04-28T17:59:41.235Z',
    __v: 0,
  },
  {
    _id: '644c09c6e419a2beffdba4b1',
    user: {
      _id: '63f26de82f652e4ae7e0a8b9',
      firstname: 'IT',
      lastname: 'Admin',
      email: 'admin@sms.com',
    },
    standard: {_id: '63f9bf96b0cd87d827109a8b', standard: 'STD-5'},
    subject: 'Maths',
    createdAt: '2023-04-28T18:00:38.639Z',
    updatedAt: '2023-04-28T18:00:38.639Z',
    __v: 0,
  },
  {
    _id: '644c0912e419a2beffdba371',
    user: {
      _id: '63f26de82f652e4ae7e0a8b9',
      firstname: 'IT',
      lastname: 'Admin',
      email: 'admin@sms.com',
    },
    standard: {_id: '63f3b424ac8cdcf5d564d9c9', standard: 'STD-1'},
    subject: 'English',
    createdAt: '2023-04-28T17:57:38.603Z',
    updatedAt: '2023-04-28T17:57:38.603Z',
    __v: 0,
  },
  {
    _id: '644c0917e419a2beffdba37f',
    user: {
      _id: '63f26de82f652e4ae7e0a8b9',
      firstname: 'IT',
      lastname: 'Admin',
      email: 'admin@sms.com',
    },
    standard: {_id: '63f3b424ac8cdcf5d564d9c9', standard: 'STD-1'},
    subject: 'Hindi',
    createdAt: '2023-04-28T17:57:43.242Z',
    updatedAt: '2023-04-28T17:57:43.242Z',
    __v: 0,
  },
  {
    _id: '644c092fe419a2beffdba39b',
    user: {
      _id: '63f26de82f652e4ae7e0a8b9',
      firstname: 'IT',
      lastname: 'Admin',
      email: 'admin@sms.com',
    },
    standard: {_id: '63f3b424ac8cdcf5d564d9c9', standard: 'STD-1'},
    subject: 'Science',
    createdAt: '2023-04-28T17:58:07.095Z',
    updatedAt: '2023-04-28T17:58:07.095Z',
    __v: 0,
  },
  {
    _id: '644c0998e419a2beffdba45d',
    user: {
      _id: '63f26de82f652e4ae7e0a8b9',
      firstname: 'IT',
      lastname: 'Admin',
      email: 'admin@sms.com',
    },
    standard: {_id: '63f9bf90b0cd87d827109a80', standard: 'STD-4'},
    subject: 'English',
    createdAt: '2023-04-28T17:59:52.513Z',
    updatedAt: '2023-04-28T17:59:52.513Z',
    __v: 0,
  },
  {
    _id: '644c091ce419a2beffdba38d',
    user: {
      _id: '63f26de82f652e4ae7e0a8b9',
      firstname: 'IT',
      lastname: 'Admin',
      email: 'admin@sms.com',
    },
    standard: {_id: '63f3b424ac8cdcf5d564d9c9', standard: 'STD-1'},
    subject: 'Maths',
    createdAt: '2023-04-28T17:57:48.843Z',
    updatedAt: '2023-04-28T17:57:48.843Z',
    __v: 0,
  },
  {
    _id: '644c0955e419a2beffdba3db',
    user: {
      _id: '63f26de82f652e4ae7e0a8b9',
      firstname: 'IT',
      lastname: 'Admin',
      email: 'admin@sms.com',
    },
    standard: {_id: '63f3b429ac8cdcf5d564d9d4', standard: 'STD-2'},
    subject: 'Maths',
    createdAt: '2023-04-28T17:58:45.916Z',
    updatedAt: '2023-04-28T17:58:45.916Z',
    __v: 0,
  },
  {
    _id: '644c0962e419a2beffdba3e9',
    user: {
      _id: '63f26de82f652e4ae7e0a8b9',
      firstname: 'IT',
      lastname: 'Admin',
      email: 'admin@sms.com',
    },
    standard: {_id: '63f3b429ac8cdcf5d564d9d4', standard: 'STD-2'},
    subject: 'Science',
    createdAt: '2023-04-28T17:58:58.693Z',
    updatedAt: '2023-04-28T17:58:58.693Z',
    __v: 0,
  },
  {
    _id: '644c0971e419a2beffdba405',
    user: {
      _id: '63f26de82f652e4ae7e0a8b9',
      firstname: 'IT',
      lastname: 'Admin',
      email: 'admin@sms.com',
    },
    standard: {_id: '63f3b42dac8cdcf5d564d9df', standard: 'STD-3'},
    subject: 'History',
    createdAt: '2023-04-28T17:59:13.334Z',
    updatedAt: '2023-04-28T17:59:13.334Z',
    __v: 0,
  },
];

const TableExample = () => {
  const tableHead = ['Subject', 'Standard', 'Created At', 'Updated At'];
  const tableData = data.map(item => [
    item.subject,
    item.standard.standard,
    item.createdAt,
    item.updatedAt,
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
          <Row
            data={tableHead}
            style={styles.head}
            textStyle={styles.text}
            flexArr={[2, 2, 2, 2]}
          />
          {tableData.map((rowData, index) => (
            <Row
              key={index}
              data={rowData}
              style={[
                styles.row,
                index % 2 === 0 ? {backgroundColor: '#F7F6E7'} : {},
              ]}
              textStyle={styles.text}
              flexArr={[2, 2, 2, 2]}
            />
          ))}
        </Table>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: '#f1f8ff'},
  text: {margin: 6, textAlign: 'center'},
  row: {height: 40, backgroundColor: '#E7E6E1'},
});

export default TableExample;
