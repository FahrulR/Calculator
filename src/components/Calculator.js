import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  CheckBox,
  TouchableOpacity,
} from 'react-native';


class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      input1: null,
      input2: null,
      input3: null,
      checked1: false,
      checked2: false,
      checked3: false,
      result: '',
    };
  }
  add = ()=> {
    if(this.state.checked1 && this.state.checked2 && this.state.checked3){
      if(this.state.input1 && this.state.input2 && this.state.input3){
        this.setState({
          result: this.state.input1 + this.state.input2 + this.state.input3
        })
      } else{
        this.setState({
          result: 'invalid'
        })
      }
  } else if(this.state.checked1 && this.state.checked2){
      if(this.state.input1 && this.state.input2){
        this.setState({
          result: this.state.input1 + this.state.input2
        })
      } else{
        this.setState({
          result: 'invalid'
        })
      }
  } else if(this.state.checked1 && this.state.checked3){
      if(this.state.input1 && this.state.input3){
        this.setState({
          result: this.state.input1 + this.state.input3
        })
      } else{
        this.setState({
          result: 'invalid'
        })
      }
  }else if(this.state.checked2 && this.state.checked3){
      if(this.state.input2 && this.state.input3){
        this.setState({
          result: this.state.input2 + this.state.input3
        })
      } 
   else{
        this.setState({
          result: 'invalid'
        })
      }
  } else{
    this.setState({
      result: 'invalid'
    })
  }
  }

  min = ()=> {
   if(this.state.checked1 && this.state.checked2 && this.state.checked3){
      if(this.state.input1 && this.state.input2 && this.state.input3){
        this.setState({
          result: this.state.input1 - this.state.input2 - this.state.input3
        })
      } else{
        this.setState({
          result: 'invalid'
        })
      }
  } else if(this.state.checked1 && this.state.checked2){
      if(this.state.input1 && this.state.input2){
        this.setState({
          result: this.state.input1 - this.state.input2
        })
      } else{
        this.setState({
          result: 'invalid'
        })
      }
  } else if(this.state.checked1 && this.state.checked3){
      if(this.state.input1 && this.state.input3){
        this.setState({
          result: this.state.input1 - this.state.input3
        })
      } else{
        this.setState({
          result: 'invalid'
        })
      }
  }else if(this.state.checked2 && this.state.checked3){
      if(this.state.input2 && this.state.input3){
        this.setState({
          result: this.state.input2 - this.state.input3
        })
      } 
   else{
        this.setState({
          result: 'invalid'
        })
      }
  } else{
    this.setState({
      result: 'invalid'
    })
  }
  }

  multiply = ()=> {
  if(this.state.checked1 && this.state.checked2 && this.state.checked3){
      if(this.state.input1 && this.state.input2 && this.state.input3){
        this.setState({
          result: this.state.input1 * this.state.input2 * this.state.input3
        })
      } else{
        this.setState({
          result: 'invalid'
        })
      }
  } else if(this.state.checked1 && this.state.checked2){
      if(this.state.input1 && this.state.input2){
        this.setState({
          result: this.state.input1 * this.state.input2
        })
      } else{
        this.setState({
          result: 'invalid'
        })
      }
  } else if(this.state.checked1 && this.state.checked3){
      if(this.state.input1 && this.state.input3){
        this.setState({
          result: this.state.input1 * this.state.input3
        })
      } else{
        this.setState({
          result: 'invalid'
        })
      }
  }else if(this.state.checked2 && this.state.checked3){
      if(this.state.input2 && this.state.input3){
        this.setState({
          result: this.state.input2 * this.state.input3
        })
      } 
   else{
        this.setState({
          result: 'invalid'
        })
      }
  } else{
    this.setState({
      result: 'invalid'
    })
  }
  }

  divide = ()=> {
   if(this.state.checked1 && this.state.checked2 && this.state.checked3){
      if(this.state.input1 && this.state.input2 && this.state.input3){
        this.setState({
          result: this.state.input1 / this.state.input2 / this.state.input3
        })
      } else{
        this.setState({
          result: 'invalid'
        })
      }
  } else if(this.state.checked1 && this.state.checked2){
      if(this.state.input1 && this.state.input2){
        this.setState({
          result: this.state.input1 / this.state.input2
        })
      } else{
        this.setState({
          result: 'invalid'
        })
      }
  } else if(this.state.checked1 && this.state.checked3){
      if(this.state.input1 && this.state.input3){
        this.setState({
          result: this.state.input1 / this.state.input3
        })
      } else{
        this.setState({
          result: 'invalid'
        })
      }
  }else if(this.state.checked2 && this.state.checked3){
      if(this.state.input2 && this.state.input3){
        this.setState({
          result: this.state.input2 / this.state.input3
        })
      } 
   else{
        this.setState({
          result: 'invalid'
        })
      }
  } else{
    this.setState({
      result: 'invalid'
    })
  }
  }

  checkBoxtTest = () => {
    this.setState((prevState) => ({checked1: !prevState.checked1}));
  }
  checkBoxtTest2 = () => {
    this.setState((prevState) => ({checked2: !prevState.checked2}));
  }
  checkBoxtTest3 = () => {
    this.setState((prevState) => ({checked3: !prevState.checked3}));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.input}>
          <TextInput
            style={styles.inputtext}
            placeholder="Enter Value here"
            onChangeText={input => this.setState({input1: parseInt(input)})}
            // value={this.state.input1}
            keyboardType={'numeric'}
          />
          <CheckBox style={styles.checkbox} value={this.state.checked1} onChange={()=>this.checkBoxtTest()} />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputtext}
            placeholder="Enter Value here"
            onChangeText={input => this.setState({input2: parseInt(input)})}
            // value={this.state.input2}
            keyboardType={'numeric'}
          />
          <CheckBox style={styles.checkbox} value={this.state.checked2} onChange={()=>this.checkBoxtTest2()} />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputtext}
            placeholder="Enter Value here"
            onChangeText={input => this.setState({input3: parseInt(input)})}
            // value={this.state.input3}
            keyboardType={'numeric'}
          />
          <CheckBox style={styles.checkbox} value={this.state.checked3} onChange={()=>this.checkBoxtTest3()}/>
        </View>
        <View style={{flexDirection: 'row', marginLeft: -50}}>
          <TouchableOpacity style={styles.button} onPress={this.add}>
            <Text>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.min}>
            <Text style={{fontSize: 20}}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.multiply}>
            <Text>X</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.divide}>
            <Text>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ul} />
        <Text style={styles.output}> Hasil:</Text>
        <Text style={styles.num}>{this.state.result}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: 'center',
  },
  input: {
    flexDirection: 'row',
    marginTop: 30,
  },
  inputtext: {
    height: 40,
    width: '60%',
    borderColor: 'black',
    borderWidth: 2,
  },
  checkbox: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  ul : {
    borderWidth: 1,
    marginTop: 20,
    width: '60%',
    marginLeft: -30,
  },
  button: {
    marginTop: 20,
    marginLeft: 20,
    borderColor: 'black',
    borderWidth: 1,
    height: 30,
    width: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  output: {
    fontSize: 26,
    marginTop: 20,
    position: 'relative',
    right: 90,
    top: 0,
  },
  num: {
    fontSize: 26,
    marginTop: 20,
    position: 'relative',
    left: 25,
    bottom: 55,
  },
});

export default Calculator;
