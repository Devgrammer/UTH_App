import { Image } from 'expo-image';
import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native'

const item = require('../../../assets/images/logo/29.png')

const RentalLedgerScreen = () => {
  return (
    <ScrollView>
      <View>
        <Text>Event Inventory</Text>
        <Text>Kailash Banquet Hall</Text>
        <Text>
          Manage and audit premium equipment rentals for the upcoming banquet.
        </Text>
      </View>
      {/* RENTAL ITEMS */}
      <View>
        <View>
          <View>
            <View>
              <Image source={item} />
            </View>
            <View>
              <Text>Fancy Chairs</Text>
              <Text>ID No.: IT-102</Text>
              <Text>₹ 20/day</Text>
            </View>
          </View>
          <View>
            <View>
              <Text>QTY</Text>
              <TextInput />
            </View>
            <View>
              <Text>QTY</Text>
              <TextInput />
            </View>
            <View>
              <Text>SUBTOTAL</Text>
              <Text>₹20.00</Text>
            </View>
          </View>
          <View></View>
        </View>
      </View>
      {/* RENTAL SUMMARY */}
      <View>
        <View>
          <View>
            <Text>Rental Summary</Text>
            <Text>Ref. No. NVSUIS</Text>
          </View>
          <View>
            <Text>GRAND TOTAL</Text>
            <Text>₹ 20.00</Text>
          </View>
          <View>
            <TouchableOpacity><Text>Confirm & Save Ledger</Text></TouchableOpacity>
            <TouchableOpacity><Text>Export PDF</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default RentalLedgerScreen