import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Switch,
  StyleSheet,
  FlatList,
} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import BodyText from './BodyText';
import Form from './Form';
import HeaderText from './HeaderText';
import Logo from './Logo';

const {h1, h2, h3, h4, h5, textColor} = globalStyles;

const FlatListItem = ({id}) => <Text>{id}</Text>;

const makeFlatListDummyData = () => {
  let dummyDataArray = [];
  for (let i = 0; i < 10; i++) {
    let dummyId = Math.round(Math.random() * 10000000).toString();
    let dummyData = {id: dummyId};
    dummyDataArray.push(dummyData);
  }
  return dummyDataArray;
};

export default function Boilerplate() {
  const [switchState, setSwitchState] = React.useState(false);

  const flatListDummyData = makeFlatListDummyData();

  const renderDummyItem = ({item}) => <FlatListItem id={item.id} />;

  return (
    <>
      <View style={styles.container}>
        <Logo />
        <HeaderText>
          <Text style={{fontSize: h1, color: textColor}}>Header 1</Text>
        </HeaderText>
        <HeaderText>
          <Text style={{fontSize: h2, color: textColor}}>Header 2</Text>
        </HeaderText>
        <HeaderText>
          <Text style={{fontSize: h3, color: textColor}}>Header 3</Text>
        </HeaderText>
        <HeaderText>
          <Text style={{fontSize: h4, color: textColor}}>Header 4</Text>
        </HeaderText>
        <HeaderText>
          <Text style={{fontSize: h5, color: textColor}}>Header 5</Text>
        </HeaderText>

        <BodyText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nihil
          odit, ab eos obcaecati porro sed voluptatem eveniet autem est! Commodi
          illo quo iure blanditiis perferendis nihil et voluptate assumenda.
        </BodyText>
        <BodyText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nihil
          odit, ab eos obcaecati porro sed voluptatem eveniet autem est! Commodi
          illo quo iure blanditiis perferendis nihil et voluptate assumenda.
        </BodyText>
        <Form />
        <Form />
        <Form />
        <Button
          title="Add Workout"
          onPress={() => console.log('button was pressed')}
        />
        <Button
          title="View Workouts"
          onPress={() => console.log('button was pressed')}
        />
        <Button
          title="Log Out"
          onPress={() => console.log('button was pressed')}
        />
        <Switch
          trackColor={{false: 'black', true: 'white'}}
          thumbColor={switchState ? 'blue' : 'black'}
          onValueChange={() => setSwitchState(previousState => !previousState)}
          value={switchState}
        />
      </View>
      <FlatList
        data={flatListDummyData}
        renderItem={renderDummyItem}
        keyExtractor={item => item.id}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    color: textColor,
  },
});
