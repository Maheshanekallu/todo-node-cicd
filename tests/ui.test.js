/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const path = require('path');

describe("To-Do List UI", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync(path.resolve(__dirname, '../public/index.html'), 'utf8');
    require('../public/script.js'); // Load the JS file after HTML is loaded
  });

  it("should add a task to the list", () => {
    const input = document.getElementById('taskInput');
    input.value = 'Buy Milk';
    document.querySelector('button').click();

    const listItems = document.querySelectorAll('#taskList li');
    expect(listItems.length).toBe(1);
    expect(listItems[0].textContent).toContain('Buy Milk');
  });

  it("should not add empty tasks", () => {
    const input = document.getElementById('taskInput');
    input.value = '   ';
    document.querySelector('button').click();

    const listItems = document.querySelectorAll('#taskList li');
    expect(listItems.length).toBe(0);
  });

  it("should remove a task when remove button is clicked", () => {
    const input = document.getElementById('taskInput');
    input.value = 'Do Laundry';
    document.querySelector('button').click();

    let listItems = document.querySelectorAll('#taskList li');
    expect(listItems.length).toBe(1);

    const removeBtn = listItems[0].querySelector('button');
    removeBtn.click();

    listItems = document.querySelectorAll('#taskList li');
    expect(listItems.length).toBe(0);
  });
});
