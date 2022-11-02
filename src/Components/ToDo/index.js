import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form'
// import AppHeader from '../Header/header';

import { v4 as uuid } from 'uuid';
import List from '../List/list'
import { Button, Card, createStyles, Grid, Slider, Text, TextInput } from '@mantine/core';


const useStyles = createStyles((theme) => ({
  formHeading: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
  },
  h1: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.gray[0],
    width: '80%',
    margin: 'auto',
    fontSize: theme.fontSizes.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.md,
  }
}));

const ToDo = () => {

  const { classes } = useStyles();

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);
  

/**
 * We're taking the current list, adding the new item to it, and then setting the list to the new list
 * @param item - the item that is being added to the list
 */
  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log('---------------------', item);
    setList([...list, item]);
    Storage(item);
  }

 function Storage(item) {
    let storage = JSON.parse(localStorage.getItem('list')) || [];
    storage.push(item);
    localStorage.setItem('list', JSON.stringify(storage));
    console.log('=====================', item);
    console.log('++++++++++++++++++++++++++++',localStorage);
  }





  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

 /**
  * If the item's id matches the id passed in, toggle the complete property
  * @param id - the id of the item we want to toggle
  */
  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);

  }

/* This is a React Hook that is called after every render. It is used to update the document title with
the number of incomplete items. */
  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <>
    <h1 className={classes.h1} data-testid="todo-h1">To Do List: {incomplete} items pending</h1>
      {/* <AppHeader incomplete={incomplete} /> */}
      <Grid style={{ width: '80%', margin: 'auto' }}>
        <Grid.Col xs={12} sm={4}>
          <Card>
            <Text className={classes.formHeading}>Add To Do Item</Text>

            <form onSubmit={handleSubmit}>

              <TextInput
                placeholder="Item Details"
                name="text"
                onChange={handleChange}
                label="To Do Item"
              />

              <TextInput
                placeholder="Assignee Name"
                name="assignee"
                onChange={handleChange}
                label="Assigned To"
              />

              <Text>Difficulty</Text>
              <Slider
                onChange={handleChange}
                defaultValue={defaultValues.difficulty}
                min={0}
                max={5}
                step={1}
                name="difficulty"
                type="range"
                mb="lg"
              />

              <Button type="submit">Add Item</Button>

            </form>

          </Card>
        </Grid.Col>

          <Grid.Col xs={12} sm={8}>
            <List list={list} toggleComplete={toggleComplete}></List>
          </Grid.Col>
      </Grid>
     
    </>
  );
};

export default ToDo;
