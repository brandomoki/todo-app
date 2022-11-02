import {createStyles, Footer, Text} from '@mantine/core';
const useStyles = createStyles((theme) => ({
  footer: {
    backgroundColor: theme.colors.blue[7],
    padding: theme.spacing.md,
    fontSize: theme.fontSizes.md,
    color: theme.colors.gray[0],
  },
  
}))
const AppFooter = ({incomplete}) => {
  const { classes } = useStyles();
  return (
    <Footer data-testid="todo-footer" className={classes.footer}>
      <Text>&copy; 2022</Text>
    </Footer>
  )
}
export default AppFooter;