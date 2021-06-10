/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Button, Text, TextInput} from 'react-native';
import Style from '../styles';

import Number from './Number';

export default class Mega extends Component {
    state = {
        qtdNumber: this.props.qtdNumber,
        generatedNumbers: this.props.generatedNumbers,
    }

    changeValue = (qtd) =>  {
        this.setState({qtdNumber: +qtd});
    }

    generateNumberNotInclude = nums => {
        const randomNumber = parseInt(Math.random() * 60, 10) + 1;
        return nums.includes(randomNumber) ? this.generateNumberNotInclude(nums) : randomNumber;
    }

    generateNumbers = () => {
        const numbers = Array(this.state.qtdNumber)
            .fill()
            .reduce(n => [...n, this.generateNumberNotInclude(n)], []);
        this.setState({generatedNumbers: numbers});
    }

    getNumbers = () => {
        const nums = this.state.generatedNumbers || [];
        return nums.map(num => {
           return <Number key={num} num={num} />;
        });
    }

    render(){
        return (
            <>
                <Text style={Style.txtB}>
                    Gerador de Mega-Sena:
                    {this.state.qtdNumber}
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{borderBottomWidth: 1}}
                    placeholder="Digite um número"
                    value={`${this.state.qtdNumber}`}
                    onChangeText={this.changeValue}
                />
                <Button
                    title="gerar"
                    onPress={this.generateNumbers}
                />
                <Text style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}>
                     {this.getNumbers()}
                </Text>
            </>
        );
    }
}
