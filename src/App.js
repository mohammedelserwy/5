
 
import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { firstPageStyles } from './components/assets/styles/Styles';
class App extends Component {
  render() {
    return (
      <View style={firstPageStyles.pageView}>
        <TouchableOpacity>
          <View style={firstPageStyles.itemView}>
            <Image source={require('./components/assets/images/iconTwo.png')} />
            <Text style={firstPageStyles.seventhText}>نسيت كلمة المرور </Text>
          </View>
        </TouchableOpacity>

        <View style={firstPageStyles.firstView}>
          <View style={firstPageStyles.secondView}>
            <Text style={firstPageStyles.firstText}>
              من فضلك أدخل الكود المرسل إليك
            </Text>
            <View style={firstPageStyles.imageView}>
              <Image source={require('./components/assets/images/phone.png')} />

            </View>

            <View style={firstPageStyles.lineView}>
              <View >
                <Text style={firstPageStyles.firstLine}>4</Text>
              </View>

            </View>
            <View style={firstPageStyles.rowView}>


              <View style={firstPageStyles.secondLineView}></View>
              <View style={firstPageStyles.secondLineView}></View>
              <View style={firstPageStyles.secondLineView}></View>
              <View style={firstPageStyles.firstLineView}></View>
            </View>

            <View style={firstPageStyles.messageView}>
              <TouchableOpacity>
                <Text style={firstPageStyles.messageText}>إعادة إرسال</Text>
                <View style={firstPageStyles.messageLineView}></View>

              </TouchableOpacity>
            </View>

          </View>
          <TouchableOpacity style={firstPageStyles.bottom}>
            <View style={firstPageStyles.thirdView}>
              <Text style={firstPageStyles.fifthText}>إدخال الكود</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default App;

