import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import useCustomerOrders from '../hooks/useCustomerOrders';
import { useTailwind } from 'tailwind-rn/dist';
import { useNavigation } from '@react-navigation/native';
import { CustomersScreenNavigationProp } from '../screens/CustomersScreen';
import { Card, Icon } from '@rneui/themed';

type Props = {
  email: String;
  name: String;
  userId: string;
};

const blue = '#59c1cc';

const CustomerCard = ({ email, name, userId }: Props) => {
  const { loading, error, orders } = useCustomerOrders(userId);
  const tw = useTailwind();
  const navigation = useNavigation<CustomersScreenNavigationProp>();

  return (
    <TouchableOpacity>
      <Card containerStyle={tw('p-5 rounded-lg')}>
        <View>
          <View style={tw('flex-row justify-between')}>
            <View>
              <Text style={tw('text-2xl font-bold')}>{name}</Text>
              <Text style={[tw('text-sm'), { color: blue }]}>ID: {userId}</Text>
            </View>

            <View style={tw('flex-row items-center justify-end')}>
              <Text style={{ color: blue }}>
                {loading ? 'loading...' : `${orders.length} x`}
              </Text>
              <Icon
                style={tw('mb-5 ml-auto')}
                name="box"
                type="entypo"
                color={blue}
                size={50}
              ></Icon>
            </View>
          </View>
        </View>
        <Card.Divider></Card.Divider>
        <Text>{email}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default CustomerCard;
