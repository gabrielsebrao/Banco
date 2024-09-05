import React from 'react'
import { useState } from 'react'
import { View, StyleSheet, Text, TextInput, Pressable, Image, Modal } from 'react-native'

export default App = () => {


    const [balance, setBalance] = useState(7320.92)
    const [inputValue, setInputValue] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const urlLogo = 'https://logospng.org/download/santander/logo-santander-2048.png'

    const deposit = () => {
        setBalance(balance + inputValue)
    }

    const withdraw = () => { 
        balance >= inputValue ? setBalance(balance - inputValue) : false
        style.button.backgroundColor = "#FFFFFF"
        setIsModalOpen(true)
        
    }

    return (
        <View style={style.app}>
            <View>
                <Image
                    style={style.logo}
                    source={{uri: urlLogo}}
                />
            </View>
            <View>
                <Text>Saldo: {balance.toFixed(2)}</Text>
            </View>
            <View>
                <TextInput 
                    style={style.textInput}
                    onChangeText={setInputValue}
                    value={inputValue}
                    placeholder='Insira o valor aqui'
                    keyboardType='numeric'
                />
            </View>
            <View>
                <Pressable
                    style={style.button}
                    onPress={withdraw}
                >
                    <Text>Sacar</Text>
                </Pressable>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
            >
                <View style={style.modalContainer}>

                </View>
            </Modal>
        </View>
    )
}


const style = StyleSheet.create({
    app: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo:{
        width:100,
        height:100
    },

    textInput:{
        width:150,
        height:50,
        paddingStart:10,
        backgroundColor:'gray',
        marginTop:10
    },

    button:{
        width:100,
        height:50,
        backgroundColor:'#EC0000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10
    },

    modalContainer:{
        width:200,
        height:150,
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        shadowOpacity: 1
    }
})