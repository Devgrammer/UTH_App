import React, { useState } from 'react'
import { View, Text ,Button, TextInput, SafeAreaView, ScrollView} from 'react-native'
 import { Formik } from "formik";
 import { Picker } from "@react-native-picker/picker";
 import DateTimePicker from "@react-native-community/datetimepicker";
import { useRouter } from 'expo-router';

const AddBookingScreen = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const router = useRouter()

  return (
    <ScrollView>
      <Text>Create New Booking</Text>
      <Text>
        Detailed orchestration of premium events and client experiences at
        India's premier estate.
      </Text>
      <Button title="back" onPress={() => router.back()} />
      <View>
        <Formik
          initialValues={{ email: "", eventType: "", guestCount: "0" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <View>
                <FieldHeader
                  heading={"Event Essence"}
                  desc={
                    "Define the core identity of the occasion to begin planning."
                  }
                />
                <View>
                  <FieldLabel title="Event Title" />
                  <TextInput
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    placeholder="e.g., John Wedding"
                  />
                </View>
                <View>
                  <FieldLabel title="Event Type" />
                  <Picker
                    selectedValue={{ label: "Wedding", value: "wedding" }}
                    onValueChange={(itemValue, itemIndex) => alert(itemValue)}
                  >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                  </Picker>
                </View>
                <View>
                  <FieldLabel title="Guest Count" />
                  <TextInput
                    onChangeText={handleChange("guestCount")}
                    onBlur={handleBlur("guestCount")}
                    value={values.guestCount}
                    placeholder="0"
                  />
                </View>
              </View>
              {/* VENUE & TIMING */}
              <View>
                <FieldHeader
                  heading={"Venue & Timing"}
                  desc={
                    "Spatial and temporal requirements for the flow of events."
                  }
                />
                <View>
                  <View>
                    <Text>Down Hall</Text>
                  </View>
                  <View>
                    <Text>Upper Hall</Text>
                  </View>
                  <View>
                    <Text>Both Hall</Text>
                  </View>
                  <View>
                    <Text>Full Banquet</Text>
                  </View>
                </View>
                <View>
                  <FieldLabel title="Event Title" />
                  <View className="flex-row items-center gap-2">
                    {/* <Button
                      onPress={showTimepicker}
                      title="Show time picker!"
                    /> */}
                    <Text>selected: {date.toLocaleDateString()}</Text>
                    <Button
                      onPress={showDatepicker}
                      title="Show date picker!"
                    />
                    {show && (
                      <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        onValueChange={(event, selectedDate) =>
                          setDate(selectedDate)
                        }
                        onDismiss={() => setShow(false)}
                      />
                    )}
                  </View>
                </View>
                <View>
                  <FieldLabel title="Event Title" />
                  <View className="flex-row items-center gap-2">
                    {/* <Button
                      onPress={showTimepicker}
                      title="Show time picker!"
                    /> */}
                    <Text>selected: {date.toLocaleDateString()}</Text>
                    <Button
                      onPress={showDatepicker}
                      title="Show date picker!"
                    />
                    {show && (
                      <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        onValueChange={(event, selectedDate) =>
                          setDate(selectedDate)
                        }
                        onDismiss={() => setShow(false)}
                      />
                    )}
                  </View>

                  <View>
                    <FieldLabel title="Event Title" />
                    <View className="flex-row items-center gap-2">
                      <Text>selected: {date.toLocaleTimeString()}</Text>
                      <Button
                        onPress={showTimepicker}
                        title="Show time picker!"
                      />
                      {/* <Button
                        onPress={showDatepicker}
                        title="Show date picker!"
                      /> */}
                      {show && (
                        <DateTimePicker
                          testID="dateTimePicker"
                          value={date}
                          mode={mode}
                          is24Hour={true}
                          onValueChange={(event, selectedDate) =>
                            setDate(selectedDate)
                          }
                          onDismiss={() => setShow(false)}
                        />
                      )}
                    </View>
                  </View>
                </View>
              </View>
              {/* CLIENT INFO */}
              <View>
                <FieldHeader
                  heading={"Client Contact"}
                  desc={
                    "Define the core identity of the occasion to begin planning."
                  }
                />
                <View>
                  <FieldLabel title="Client Full Legal Name" />
                  <TextInput
                    onChangeText={handleChange("clientName")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    placeholder="e.g., John Wedding"
                  />
                </View>
                <View>
                  <FieldLabel title="Phone Number" />
                  <TextInput
                    onChangeText={handleChange("clientPhoneNumber")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    placeholder="e.g., John Wedding"
                  />
                </View>
                <View>
                  <FieldLabel title="Phone Number" />
                  <TextInput
                    onChangeText={handleChange("clientPhoneNumber")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    placeholder="e.g., John Wedding"
                  />
                </View>
                <View>
                  <FieldLabel title="Address" />
                  <TextInput
                    onChangeText={handleChange("clientAdress")}
                    onBlur={handleBlur("guestCount")}
                    value={values.guestCount}
                    placeholder="0"
                  />
                </View>

                <View>
                  <FieldLabel title="Whatsapp Number" />
                  <TextInput
                    onChangeText={handleChange("clientWhatsapp")}
                    onBlur={handleBlur("guestCount")}
                    value={values.guestCount}
                    placeholder="0"
                  />
                </View>
                <View>
                  <FieldLabel title="Last 4 digit of Aadhaar" />
                  <TextInput
                    onChangeText={handleChange("clientID")}
                    onBlur={handleBlur("guestCount")}
                    value={values.guestCount}
                    placeholder="0"
                  />
                </View>
              </View>

              {/* REFRENCE */}
              <View>
                <FieldHeader
                  heading={"Reference Info"}
                  desc={
                    "Define the core identity of the occasion to begin planning."
                  }
                />
                <View>
                  <FieldLabel title="Person of Refrence" />
                  <TextInput
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    placeholder="e.g., John Wedding"
                  />
                </View>
              </View>
              {/* FINANCIALS */}
              <View>
                <FieldHeader
                  heading={"Event Essence"}
                  desc={
                    "Define the core identity of the occasion to begin planning."
                  }
                />
                <View>
                  <FieldLabel title="Event Title" />
                  <TextInput
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    placeholder="e.g., John Wedding"
                  />
                </View>
                <View>
                  <FieldLabel title="Total Contract Value" />
                  <Picker
                    selectedValue={{ label: "Wedding", value: "wedding" }}
                    onValueChange={(itemValue, itemIndex) => alert(itemValue)}
                  >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                  </Picker>
                </View>
                <View>
                  <FieldLabel title="Advance Recieved" />
                  <TextInput
                    onChangeText={handleChange("guestCount")}
                    onBlur={handleBlur("guestCount")}
                    value={values.guestCount}
                    placeholder="0"
                  />
                </View>
                <View>
                  <FieldLabel title="Pending Balance" />
                  <TextInput
                    onChangeText={handleChange("guestCount")}
                    onBlur={handleBlur("guestCount")}
                    value={values.guestCount}
                    placeholder="0"
                  />
                </View>
                <View>
                  <FieldLabel title="Payment Mode" />
                  <Picker
                    selectedValue={{ label: "Wedding", value: "wedding" }}
                    onValueChange={(itemValue, itemIndex) => alert(itemValue)}
                  >
                    <Picker.Item label="UPI" value="upi" />
                    <Picker.Item label="JavaScript" value="js" />
                  </Picker>
                </View>
              </View>
              {/* PACKAGE TIER */}
              <View>
                <FieldHeader
                  heading={"PACKAGE TIER"}
                  desc={
                    "Define the core identity of the occasion to begin planning."
                  }
                />
                <View>
                  <View>
                    <Text>Gold</Text>
                  </View>
                  <View>
                    <Text>Silver</Text>
                  </View>
                  <View>
                    <Text>Broze</Text>
                  </View>
                </View>
                <View>
                  <FieldLabel title="Event Notes" />
                  <TextInput
                    onChangeText={handleChange("guestCount")}
                    onBlur={handleBlur("guestCount")}
                    value={values.guestCount}
                    placeholder="0"
                  />
                </View>
              </View>
              <Button onPress={(e) => handleSubmit()} title="Discard Draft" />
              <Button onPress={(e) => handleSubmit()} title="Create Booking" />
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
}

export default AddBookingScreen

const FieldHeader=({heading,desc})=>{
  return (
    <View>
      <Text>{heading}</Text>
      <Text>{desc}</Text>
    </View>
  )
}

const FieldLabel = ({ title }) => {
  return (
      <Text>{title}</Text>
  );
};

