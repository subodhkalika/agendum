import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });
  
  it('should accept valus in constructor', () => {
    let todo = new Todo({
      title: 'some task',
      complete: true
    });

    expect(todo.title).toEqual('some task');
    expect(todo.complete).toEqual(true);
  });
});
