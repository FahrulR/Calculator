import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  CheckBox,
  TouchableOpacity,
  Dimensions
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
          result: parseFloat(this.state.input1 / this.state.input2 / this.state.input3).toFixed(8)
        })
      } else{
        this.setState({
          result: 'invalid'
        })
      }
  } else if(this.state.checked1 && this.state.checked2){
      if(this.state.input1 && this.state.input2){
        this.setState({
          result: parseFloat(this.state.input1 / this.state.input2).toFixed(8)
        })
      } else{
        this.setState({
          result: 'invalid'
        })
      }
  } else if(this.state.checked1 && this.state.checked3){
      if(this.state.input1 && this.state.input3){
        this.setState({
          result: parseFloat(this.state.input1 / this.state.input3).toFixed(8)
        })
      } else{
        this.setState({
          result: 'invalid'
        })
      }
  }else if(this.state.checked2 && this.state.checked3){
      if(this.state.input2 && this.state.input3){
        this.setState({
          result: parseFloat(this.state.input2 / this.state.input3).toFixed(8)
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
      <View style={styles.header}><Text style={styles.headertext}>Calculator App</Text></View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputtext}
            placeholder="Enter Value here"
            onChangeText={input => this.setState({input1: parseInt(input)})}
            keyboardType={'numeric'}
          />
          <CheckBox style={styles.checkbox} value={this.state.checked1} onChange={()=>this.checkBoxtTest()} />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputtext}
            placeholder="Enter Value here"
            onChangeText={input => this.setState({input2: parseInt(input)})}
            keyboardType={'numeric'}
          />
          <CheckBox style={styles.checkbox} value={this.state.checked2} onChange={()=>this.checkBoxtTest2()} />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputtext}
            placeholder="Enter Value here"
            onChangeText={input => this.setState({input3: parseInt(input)})}
            keyboardType={'numeric'}
          />
          <CheckBox style={styles.checkbox} value={this.state.checked3} onChange={()=>this.checkBoxtTest3()}/>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <TouchableOpacity style={styles.button} onPress={this.add}>
              <Text style={styles.btn}>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={this.min}>
            <Text style={{color: '#FFF', fontSize: 50, marginBottom: 5}}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.multiply}>
            <Text style={styles.btn}>X</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.divide}>
            <Text style={styles.btn}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
        <Text style={styles.output}> Hasil:</Text>
        <Text style={this.state.result == 'invalid' ? styles.invalid: styles.num}>{this.state.result}</Text>
      </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: '#FFF',
    alignSelf: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    backgroundColor: '#00b89C',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 250,
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 50,
  },
  headertext: {
    fontSize: 26,
    color: '#FFF'
  },
  btn: {
    color: '#FFF',
    fontSize: 25,
  },
  input: {
    flexDirection: 'row',
    marginTop: 20,
  },
  inputtext: {
    height: 40,
    width: '92%',
    borderColor: 'gray',
    borderWidth: 1.5,
    paddingHorizontal: 10,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  checkbox: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#fff'
  },
   footer: {
    backgroundColor: '#00b89C',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 325,
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 50,
  },
  button: {
    marginTop: 15,
    marginRight: 10,
    backgroundColor: '#00b89C',
    borderColor: 'transparent',
    borderWidth: 1,
    height: 45,
    width: 67,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  output: {
    fontSize: 26,
    marginTop: 20,
    position: 'relative',
    alignSelf: 'flex-start',
    right: 0,
    top: 20,
    color: '#FFF',
  },
  num: {
    fontSize: 26,
    marginTop: 20,
    marginRight: 5,
    position: 'relative',
    alignSelf: 'flex-end',
    left: 0,
    bottom: 35,
    color: '#FFF',
  },
  invalid: {
    fontSize: 26,
    marginTop: 20,
    marginRight: 5,
    position: 'relative',
    alignSelf: 'flex-end',
    left: 0,
    bottom: 35,
    color: 'red',
  },
});

export default Calculator;
