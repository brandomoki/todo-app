import {createStyles, Footer, Text} from '@mantine/core';
const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.blue[7],
    padding: theme.spacing.md,
    fontSize: theme.fontSizes.md,
    color: theme.colors.gray[0],
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
}))
const AppFooter = ({incomplete}) => {
  const { classes } = useStyles();
  return (
    <Footer data-testid="todo-footer">
      <Text>&copy; 2022</Text>
    </Footer>
  )
}
export default AppFooter;