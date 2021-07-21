import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

const {global, h1, h2, h3, h4, h5, headers} = globalStyles;

export default function Boilerplate() {
  return (
    <View>
      <Text style={h1}>Header 1</Text>
      <Text style={h2}>Header 2</Text>
      <Text style={h3}>Header 3</Text>
      <Text style={h4}>Header 4</Text>
      <Text style={h5}>Header 5</Text>
      <Text style={global}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
        dolorum quo error eaque odit expedita quibusdam quisquam, debitis
        deleniti earum labore. Itaque consequuntur ab aperiam saepe quaerat
        omnis est provident?
      </Text>
      <Text style={global}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
        laudantium distinctio velit corrupti, id officiis quibusdam modi fugit
        recusandae eum sed magni hic facilis odit nihil, sit accusantium debitis
        dolore?
      </Text>
      <TextInput style={global} placeholder="placeholder text" />
      <TextInput
        style={global}
        placeholder="placeholder number"
        keyboardType="numeric"
      />
      <TextInput
        style={global}
        placeholder="placeholder text area"
        multiline
        numberOfLines={5}
      />
      <Button
        color={global.color || 'black'}
        title="home"
        onPress={() => console.log('do nothing')}
      />
      <Button
        color={global.color || 'black'}
        title="cancel"
        onPress={() => console.log('do nothing')}
      />
      <Button
        color={global.color || 'black'}
        title="next"
        onPress={() => console.log('do nothing')}
      />
    </View>
  );
}
