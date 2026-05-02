import { useContext, useEffect, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Platform } from 'react-native'
import { Formik, } from "formik";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { useRouter } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryTextField from '@/components/ui/primaryTextField';
import {
  Calendar,
  Tag,
  Users,
  Home,
  Clock,
  User,
  Phone,
  Mail,
  MessageCircle,
  CreditCard,
  UserCheck,
  DollarSign,
  Wallet,
  Calculator,
  Award,
  Trophy,
  Medal,
  FileText,
  Calendar1Icon,
  HouseHeart,
  LucideHome
} from 'lucide-react-native';
import PrimaryPicker from '@/components/ui/primaryPicker';
import PrimaryButton from '@/components/ui/primaryButton';
import { AppContext } from '@/context/appContext';
import axios from 'axios';
import API_URL from '@/constant/api';

interface FormValues {
  eventTitle: string;
  eventType: string;
  guestCount: string;
  selectedHall: string;
  startDate: Date | null;
  endDate: Date | null;
  clientName: string;
  clientPhoneNumber: string;
  clientEmailAddress: string;
  clientWhatsappNumber: string;
  clientAddress: string;
  clientAadharLast4: string;
  personOfReference: string;
  totalContractAmount: number;
  advanceAmountPaid: number;
  pendingBalance: number;
  paymentMode: string;
  selectedPackage: 'silver' | 'gold' | 'bronze' | '';
  bookingStatus: 'pending' | 'rejected' | 'cancelled' | 'confirmed'|'rescheduled';
  eventNotes: string;
  venue: object | string
}

const AddBookingScreen = () => {
  const { user } = useContext(AppContext)
  const [venuePickerDetail, setVenuePickerDetail] = useState({})
  const userDetail = JSON.parse(user)
  const [showDatePicker, setShowDatePicker] = useState<string | null>(null);





  const router = useRouter()





  let formDetails = [
    {
      "categoryId": 2,
      "categoryName": "event",
      "categoryTitle": "Event Details",
      "categoryDescription": "Tell us about your special occasion",
      "categoryOrder": 2,
      "fields": [
        {
          "icon": Calendar,
          "label": "Event Title",
          "fieldName": "eventTitle",
          "placeholder": "Enter event title (e.g., Wedding of Rahul & Priya)",
          "componentType": "input",
          "secure": false,
          "multiline": false,
          "autoCapitalize": "words",
          "keyboardType": "default"
        },
        {
          "icon": Tag,
          "label": "Event Type",
          "fieldName": "eventType",
          "placeholder": "Select event type",
          "componentType": "picker",
          "data": [
            { "label": "Wedding", "value": "wedding" },
            { "label": "Birthday Party", "value": "birthday" },
            { "label": "Corporate Event", "value": "corporate" },
            { "label": "Engagement", "value": "engagement" },
            { "label": "Anniversary", "value": "anniversary" },
            { "label": "Conference", "value": "conference" },
            { "label": "Other", "value": "other" }
          ]
        },
        {
          "icon": Users,
          "label": "Guest Count",
          "fieldName": "guestCount",
          "placeholder": "Number of guests",
          "componentType": "input",
          "secure": false,
          "multiline": false,
          "autoCapitalize": "none",
          "keyboardType": "numeric"
        }
      ]
    },
    {
      "categoryId": 3,
      "categoryName": "venue",
      "categoryTitle": "Venue Information",
      "categoryDescription": "Select your preferred hall and timings",
      "categoryOrder": 3,
      "fields": [
        {
          "icon": Home,
          "label": "Select Hall",
          "fieldName": "selectedHall",
          "placeholder": "Select hall",
          "componentType": "picker",
          "data": [
            { "label": "Upper Hall", "value": "upperHall" },
            { "label": "Down Hall", "value": "downHall" },
            { "label": "Full Banquet", "value": "fullBanquet" }
          ]
        },
        {
          "icon": Calendar,
          "label": "Start Date",
          "fieldName": "startDate",
          "placeholder": "Select start date",
          "componentType": "datepicker",
          "mode": "date"
        },
        {
          "icon": Calendar,
          "label": "End Date",
          "fieldName": "endDate",
          "placeholder": "Select end date",
          "componentType": "datepicker",
          "mode": "date"
        },
      ]
    },
    {
      "categoryId": 4,
      "categoryName": "client",
      "categoryTitle": "Client Information",
      "categoryDescription": "Personal details of the client",
      "categoryOrder": 4,
      "fields": [
        {
          "icon": User,
          "label": "Client Name",
          "fieldName": "clientName",
          "placeholder": "Client full name",
          "componentType": "input",
          "secure": false,
          "multiline": false,
          "autoCapitalize": "words",
          "keyboardType": "default"
        },
        {
          "icon": Phone,
          "label": "Client Phone Number",
          "fieldName": "clientPhoneNumber",
          "placeholder": "Phone number",
          "componentType": "input",
          "secure": false,
          "multiline": false,
          "autoCapitalize": "none",
          "keyboardType": "phone-pad"
        },
        {
          "icon": Mail,
          "label": "Client Email Address",
          "fieldName": "clientEmailAddress",
          "placeholder": "Email address",
          "componentType": "input",
          "secure": false,
          "multiline": false,
          "autoCapitalize": "none",
          "keyboardType": "email-address"
        },
        {
          "icon": MessageCircle,
          "label": "Client WhatsApp Number",
          "fieldName": "clientWhatsappNumber",
          "placeholder": "WhatsApp number",
          "componentType": "input",
          "secure": false,
          "multiline": false,
          "autoCapitalize": "none",
          "keyboardType": "phone-pad"
        },
        {
          "icon": LucideHome,
          "label": "Client Address",
          "fieldName": "clientAddress",
          "placeholder": "Address",
          "componentType": "input",
          "secure": false,
          "multiline": true,
          "autoCapitalize": "sentence",
          "keyboardType": "default"
        },
        {
          "icon": CreditCard,
          "label": "Aadhar Last 4 Digits",
          "fieldName": "clientAadharLast4",
          "placeholder": "Aadhar last 4 digits",
          "componentType": "input",
          "secure": false,
          "multiline": false,
          "autoCapitalize": "none",
          "keyboardType": "numeric",
          "maxLength": 4
        }
      ]
    },
    {
      "categoryId": 5,
      "categoryName": "referenceInfo",
      "categoryTitle": "Reference Information",
      "categoryDescription": "How did you hear about us?",
      "categoryOrder": 5,
      "fields": [
        {
          "icon": UserCheck,
          "label": "Person of Reference",
          "fieldName": "personOfReference",
          "placeholder": "Person of reference (name/source)",
          "componentType": "input",
          "secure": false,
          "multiline": false,
          "autoCapitalize": "words",
          "keyboardType": "default"
        }
      ]
    },
    {
      "categoryId": 6,
      "categoryName": "finance",
      "categoryTitle": "Financial Details",
      "categoryDescription": "Payment and contract information",
      "categoryOrder": 6,
      "fields": [
        {
          "icon": DollarSign,
          "label": "Total Contract Amount",
          "fieldName": "totalContractAmount",
          "placeholder": "Total contract amount (₹)",
          "componentType": "input",
          "secure": false,
          "multiline": false,
          "autoCapitalize": "none",
          "keyboardType": "numeric"
        },
        {
          "icon": Wallet,
          "label": "Advance Amount Paid",
          "fieldName": "advanceAmountPaid",
          "placeholder": "Advance amount paid (₹)",
          "componentType": "input",
          "secure": false,
          "multiline": false,
          "autoCapitalize": "none",
          "keyboardType": "numeric"
        },
        {
          "icon": Calculator,
          "label": "Pending Balance",
          "fieldName": "pendingBalance",
          "placeholder": "Pending balance (₹)",
          "componentType": "input",
          "secure": false,
          "multiline": false,
          "autoCapitalize": "none",
          "keyboardType": "numeric"
        },
        {
          "icon": CreditCard,
          "label": "Payment Mode",
          "fieldName": "paymentMode",
          "placeholder": "Select payment mode",
          "componentType": "picker",
          "data": [
            { "label": "Cash", "value": "cash" },
            { "label": "Credit Card", "value": "creditCard" },
            { "label": "Debit Card", "value": "debitCard" },
            { "label": "UPI", "value": "upi" },
            { "label": "Bank Transfer", "value": "bankTransfer" },
            { "label": "Cheque", "value": "cheque" }
          ]
        }
      ]
    },
    {
      "categoryId": 7,
      "categoryName": "packages",
      "categoryTitle": "Select Package",
      "categoryDescription": "Choose a package that suits your needs",
      "categoryOrder": 7,
      "fields": [
        {
          "id": 1,
          "name": "Silver",
          "label": "Silver Package",
          "price": 50000,
          "features": [
            "Basic Decoration",
            "Vegetarian Menu",
            "2 Hour DJ",
            "Basic Lighting"
          ],
          "icon": Award,
          "fieldName": "selectedPackage",
          "value": "silver",
          "componentType": "card"
        },
        {
          "id": 2,
          "name": "Gold",
          "label": "Gold Package",
          "price": 100000,
          "features": [
            "Premium Decoration",
            "Multi-cuisine Menu",
            "4 Hour DJ",
            "Premium Lighting",
            "Welcome Drinks",
            "Photography"
          ],
          "icon": Trophy,
          "fieldName": "selectedPackage",
          "value": "gold",
          "componentType": "card"
        },
        {
          "id": 3,
          "name": "Bronze",
          "label": "Bronze Package",
          "price": 75000,
          "features": [
            "Standard Decoration",
            "Limited Menu",
            "3 Hour DJ",
            "Standard Lighting",
            "Basic Cake"
          ],
          "icon": Medal,
          "fieldName": "selectedPackage",
          "value": "bronze",
          "componentType": "card"
        }
      ]
    },
    {
      "categoryId": 8,
      "categoryName": "eventNotes",
      "categoryTitle": "Additional Notes",
      "categoryDescription": "Any special requests or instructions",
      "categoryOrder": 8,
      "fields": [
        {
          "icon": FileText,
          "label": "Event Notes",
          "fieldName": "eventNotes",
          "placeholder": "Additional notes, special requests, or instructions",
          "componentType": "textarea",
          "secure": false,
          "multiline": true,
          "autoCapitalize": "sentences",
          "keyboardType": "default"
        },
        
      ]
    },
    {
      "categoryId": 9,
      "categoryName": "bookingSummary",
      "categoryTitle": "Booking Summary",
      "categoryDescription": "Review your booking details",
      "categoryOrder": 9,
      "fields": [
        {
          "icon": FileText,
          "label": "Booking Status",
          "fieldName": "bookingStatus",
          "placeholder": "Select Status",
          "componentType": "picker",
          "data": [
            { "label": "Pending", "value": "pending" },
            { "label": "Confirmed", "value": "confirmed" },
            { "label": "Rejected", "value": "rejected" },
            { "label": "Cancelled", "value": "cancelled" },
            { "label": "Rescheduled", "value": "rescheduled" },
          ]
        },

      ]
    }
  ]


  const pushToCategoryByName = (formConfig, categoryName, newField) => {
    return formConfig.map(category => {
      if (category.categoryName === categoryName) {
        return {
          ...category,
          fields: [newField, ...category.fields]
        };
      }
      return category;
    });
  };

  const getAllVenue = async () => {
    try {
      const response = await axios.get(API_URL.MY_VENUE.replace('userId', userDetail._id));

      if (response.status === 200) {
        let venuePickerDetail = response.data.data.map((data, index) => { return { label: data.venueName, value: { venueName: data.venueName, venueId: data._id , venueVID:data.venueId} } })
        let updatedField = {
          "icon": HouseHeart,
          "label": "Venue",
          "fieldName": "venue",
          "placeholder": "Select the venue",
          "componentType": "picker",
          "data": venuePickerDetail
        }

        setVenuePickerDetail(updatedField)



      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => { getAllVenue() }, []);


  const initialValues: FormValues = {
    eventTitle: "",
    eventType: "",
    guestCount: "",
    selectedHall: "",
    startDate: new Date(),
    endDate: new Date(),
    clientName: "",
    clientPhoneNumber: "",
    clientEmailAddress: "",
    clientWhatsappNumber: "",
    clientAddress: "",
    clientAadharLast4: "",
    personOfReference: "",
    totalContractAmount: 0,
    advanceAmountPaid: 0,
    pendingBalance: 0,
    paymentMode: "",
    selectedPackage: "",
    bookingStatus:"pending",
    eventNotes: "",
    venue: { "venueId": "", "venueName": "", "venueVID": ""},
  };

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const handleCreateBookingSubmit = (values, resetForms) => {
    const bookingData = {
      // Event Group
      event: {
        title: values.eventTitle,
        type: values.eventType,
        guestCount: parseInt(values.guestCount) || 0,
        notes: values.eventNotes
      },

      // Venue & Hall Group
      venue: {
        venueId: values.venue.venueId,
        venueVID: values.venue.venueVID,
        venueName: values.venue.venueName,
        selectedHall: values.selectedHall,
        startDate: values.startDate,
        endDate: values.endDate
      },

      // Client Group
      client: {
        name: values.clientName,
        phoneNumber: values.clientPhoneNumber,
        emailAddress: values.clientEmailAddress,
        whatsappNumber: values.clientWhatsappNumber,
        address: values.clientAddress,
        aadharLast4: values.clientAadharLast4
      },

      // Reference Group
      reference: {
        personOfReference: values.personOfReference
      },

      // Finance Group
      finance: {
        totalContractAmount: parseFloat(values.totalContractAmount) || 0,
        advanceAmountPaid: parseFloat(values.advanceAmountPaid) || 0,
        pendingBalance: parseFloat(values.pendingBalance) || 0,
        paymentMode: values.paymentMode
      },

      // Package Group
      package: {
        selectedPackage: values.selectedPackage
      },

      // Created By Group
      createdBy: {
        userId: userDetail._id || userDetail.id,
        userVID: userDetail.userId,
        fullName: userDetail.fullName,
        email: userDetail.email,
        phoneNumber: userDetail.phoneNumber,
        role: userDetail.role
      },
      booking: {
        status: values.bookingStatus, // System sets, not user
        bookedAt: new Date().toISOString(),
        source: Platform.OS
      },
    };
    console.log('formData', bookingData)
  }

  let updatedFormDataFields = pushToCategoryByName(formDetails, 'venue', venuePickerDetail)

  return (
    <SafeAreaView className='flex-1' >
      <ScrollView className="px-4">
        <PageHeading heading='Create New Booking' desc="Detailed orchestration of premium events and client experiences at India's premier estate" />
        <View>
          <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            onSubmit={(values, resetForm) => handleCreateBookingSubmit(values, resetForm)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, resetForm, setFieldTouched }) => {
              const handlePackage = (el: any) => {
                setFieldValue('selectedPackage', el.name)
                setFieldValue('totalContractAmount', el.price)
                setFieldTouched('totalContractAmount', true);
              }

              return (
                <View className='gap-12'>
                  {
                    updatedFormDataFields.sort((a: any, b: any) => a.categoryOrder - b.categoryOrder).map((formDetail, index) => {
                      const { fields, categoryId, categoryDescription, categoryName, categoryTitle } = formDetail
                      return (
                        <View key={`fc-${categoryName}-${index}`} className="gap-6">
                          <FieldHeader
                            heading={categoryTitle}
                            desc={categoryDescription}
                          />
                          <View className={`gap-4`}>
                            {
                              fields.map((el, index) => {
                                const { icon, label, fieldName, componentType, } = el


                                switch (componentType) {
                                  case 'input':
                                    return (
                                      <View key={`ab-${index}`}>
                                        <FieldLabel title={label} />
                                        <PrimaryTextField
                                          Icon={icon}
                                          fieldName={fieldName}
                                          handleChange={handleChange}
                                          placeholder={el.placeholder}
                                          secure={el.secure}
                                          value={(values as any)[fieldName]}
                                          handleBlur={handleBlur}
                                          multiline={el.multiline}
                                          autoCapitalize={el.autoCapitalize}
                                          keyboardType={el.keyboardType}
                                        />
                                      </View>)
                                  case 'picker':
                                    return (
                                      <View key={`ab-${index}`}>
                                        <FieldLabel title={label} />
                                        <PrimaryPicker initialValue={{ label: '1', value: '1' }} data={el?.data} setFieldValue={setFieldValue} Icon={el.icon} placeholder={el.placeholder} size={14} fieldName={el.fieldName} />
                                      </View>
                                    )
                                  case 'card':
                                    return (
                                      <TouchableOpacity key={`ab-${index}`} onPress={() => handlePackage(el)} className={`items-center justify-center w-1/3 h-24 border-2 rounded-lg border-brand-dark ${values.selectedPackage === el.name ? 'bg-brand-dark' : 'bg-white'}`}>
                                        <el.icon color={`${values.selectedPackage === el.name ? 'white' : 'black'}`} />
                                        <Text className={`${values.selectedPackage === el.name ? 'text-white' : 'text-text'}`}>{el.name}</Text>
                                      </TouchableOpacity>
                                    )
                                  case 'datepicker':
                                    return (
                                      <View className='' key={`ab-${index}`}>
                                        <FieldLabel title={el.label} />
                                        <View className="flex-row items-center justify-between w-full gap-2 p-2 rounded-lg bg-neutral-300 h-14">
                                          <Text>{(values as any)[el.fieldName]?.toLocaleDateString("en-US", options)}</Text>

                                          {(showDatePicker === el.fieldName) && (
                                            <DateTimePicker
                                              testID="dateTimePicker"
                                              minimumDate={el.fieldName === 'startDate' ? new Date(Date.now()) : new Date(values?.startDate as Date)}
                                              value={values[el.fieldName as keyof FormValues] as Date || new Date()}
                                              display="default"
                                              mode={'date'}
                                              onChange={(event: DateTimePickerEvent, selectedDate: Date) => {
                                                setFieldValue(el.fieldName, new Date(selectedDate));
                                                setShowDatePicker(null);
                                              }}
                                              onDismiss={() => setShowDatePicker(null)}
                                            />
                                          )}
                                          <TouchableOpacity
                                            className=''
                                            onPress={() => setShowDatePicker(el.fieldName)}
                                          ><Calendar1Icon /></TouchableOpacity>
                                        </View>

                                      </View>
                                    )

                                  case 'textarea':
                                    return (
                                      <View key={`ab-${index}`}>
                                        <FieldLabel title={label} />
                                        <PrimaryTextField
                                          fieldName={fieldName}
                                          handleChange={handleChange}
                                          placeholder={el.placeholder}
                                          secure={el.secure}
                                          value={(values as any)[fieldName]}
                                          handleBlur={handleBlur}
                                          multiline={el.multiline}
                                          autoCapitalize={el.autoCapitalize}
                                          keyboardType={el.keyboardType}
                                          addFieldClass='h-32'
                                          numberofLines={6}
                                          textAlignVertical={'top'}
                                        />
                                      </View>)

                                }

                              })
                            }
                          </View>
                        </View>
                      )
                    })
                  }
                  <View className='gap-y-2'>
                    <PrimaryButton handlePress={() => resetForm()} title="Discard Draft" />
                    <PrimaryButton handlePress={() => handleSubmit()} title="Create Booking" />
                  </View>
                </View>
              )
            }}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AddBookingScreen

const FieldHeader = ({ heading, desc }) => {
  return (
    <View>
      <Text className='text-2xl font-bold font-heading text-brand-dark'>{heading}</Text>
      <Text className='text-sm leading-tight text-text-lighter'>{desc}</Text>
    </View>
  )
}

const PageHeading = ({ heading, desc }) => {
  return (
    <View className='py-4'>
      <Text className='text-2xl font-bold font-heading text-text'>{heading}</Text>
      <Text className='text-sm leading-tight text-text-lighter'>{desc}</Text>
    </View>
  )
}

const FieldLabel = ({ title }) => {
  return (
    <Text className='text-sm tracking-[2] text-neutral-600 font-bold'>{title?.toUpperCase()}</Text>
  );
};

