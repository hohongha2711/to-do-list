import TodoList from "./TodoList";

const Content = () => {
  const list_data = [
    {
      id: 1,
      title: "To do app react",
      action: "Completed",
    },
    {
      id: 2,
      title: "To do app react2",
      action: "Doing",
    },
    {
      id: 3,
      title: "To do app react3",
      action: "Doing",
    },

    {
      id: 4,
      title: "To do app react3",
      action: "To do",
    },
  ];

  const comp = list_data?.filter((item) => item.action === "Completed") || null;
  const doing = list_data?.filter((item) => item.action === "Doing") || null;
  const todo = list_data?.filter((item) => item.action === "To do") || null;
  return (
    <div className="container">
      <div className="todo">
        <TodoList status={'To do'} />
      </div>
      <div className="doing">
        <TodoList status={'Doing'} />
      </div>
      <div className="completed">
        <TodoList status={'Completed'} />
      </div>
    </div>
  );
};

export default Content;
