/* eslint-disable react-native/no-inline-styles */
// in node modules react-native-translator>dist>components>Translator.js change the onTranslate parameter at 
// declaration to onTranslate=()=>{}
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Voice from '@react-native-voice/voice';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';
import {Card, Paragraph} from 'react-native-paper';
import useTranslator from 'react-native-translator/dist/hooks/useTranslator';
import Translator from 'react-native-translator/dist/components/Translator';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const SpeechToTextScreen = ({navigation}) => {
  const _goBack = () => navigation.navigate('HomeScreen');
  const [language, setLanguage] = useState('si');
  const [recognized, setRecognized] = useState('');
  const [started, setStarted] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const [end, setEnd] = useState('');
  const [translation, setTranslation] = useState('');
  const {translate} = useTranslator();
  const [srcLang, setSrcLang] = useState('en');

  const onSpeechStart = e => {
    setStarted('True');
  };
  const onSpeechEnd = () => {
    setStarted(null);
    setEnd('True');
  };

  const onSpeechError = e => {
    setError(JSON.stringify(e.error));
  };
  const onSpeechResults = e => {
    setResults(e.value);
  };
  const startSpeechRecognizing = async () => {
    setError('');
    setStarted('');
    setResults([]);
    setEnd('');
    setRecognized('');
    try {
      await Voice.start('en-US');
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechRecognized = startSpeechRecognizing;
  }, []);

  return (
    <>
      <SafeAreaView style={{backgroundColor: '#f3f3f3'}} />
      <ScrollView style={{padding: 20}}>
        {/* Back nav */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Ionicons name="arrow-back" size={30} onPress={_goBack} />

          {/* Convert to Touchable Opacity */}
          <View onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={{
                uri: 'https://res.cloudinary.com/tourx/image/upload/v1659810322/h_bxxpuz.png',
              }}
              style={{width: 35, height: 35}}
              imageStyle={{borderRadius: 25}}
            />
          </View>
        </View>

        {/* Microphone */}
        <View>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              marginTop: 50,
            }}
            onPress={startSpeechRecognizing}>
            <Ionicons
              name="mic-circle-outline"
              size={150}
              textAlign="center"
              color={'#1768AC'}
            />
          </TouchableOpacity>
        </View>

        {/* Selecting languages */}
        <View
          style={{
            marginTop: 50,
            flexDirection: 'row',
          }}>
          {/* from */}
          <View style={{flex: 1}}>
            <Text
              style={{
                flex: 1,
                color: 'black'
              }}>
              Translate from:
            </Text>
            <Picker
              selectedValue={srcLang}
              onValueChange={currentLanguage => setSrcLang(currentLanguage)}
              style={{
                flex: 1,
                color: 'black'
              }}>
              <Picker.Item label="English" value="en" />
              <Picker.Item label="Hindi" value="hi" />
              <Picker.Item label="Russian" value="ru" />
              <Picker.Item label="German" value="de" />
              <Picker.Item label="Chinese" value="zh-CN" />
              <Picker.Item label="French" value="fr" />
              <Picker.Item label="Ukrainian" value="uk" />
              <Picker.Item label="Dutch" value="nl" />
            </Picker>
          </View>

          {/* to */}
          <View style={{flex: 1}}>
            <Text
              style={{
                flex: 1,
                color: 'black'
              }}>
              Translate to:
            </Text>
            <Picker
              selectedValue={language}
              onValueChange={currentLanguage => setLanguage(currentLanguage)}
              style={{
                flex: 1,
                color: 'black'
              }}>
              <Picker.Item label="Sinhalese" value="si" />
              <Picker.Item label="Tamil" value="ta" />
            </Picker>
          </View>
        </View>

        {/* Cards */}
        <View
          style={{
            flexDirection: 'row',
          }}>
          {/* Source language */}
          <Card
            style={{
              marginTop: 10,
              minHeight: 200,
              marginRight: 5,
              flex: 1,
            }}>
            <Card.Content>
              <Paragraph>
                <Text>{results[0]}</Text>
              </Paragraph>
            </Card.Content>
          </Card>

          {/* Translated language */}
          <Card
            style={{
              marginTop: 10,
              minHeight: 200,
              marginLeft: 5,
              flex: 1,
            }}>
            <Card.Content>
              <Paragraph>
                <Translator
                  from={srcLang}
                  to={language}
                  value={results[0]}
                  onTranslated={r => setTranslation(r)}
                />
                <Text>
                  {translation === 'නිර්වචනය නොකළ' ||
                  translation === 'வரையறுக்கப்படாத'
                    ? ''
                    : translation}
                </Text>
              </Paragraph>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </>
  );
};

export default SpeechToTextScreen;
