document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = document.createElement('button');
    btn.textContent = 'X'
    btn.addEventListener('click', deleteTask)
    const list = document.getElementById("new-task-description");
    
    const listItem = document.createElement("li");
    listItem.innerText = `${list.value}  `;
    listItem.appendChild(btn);

    append(listItem);
    form.reset();
  });

  const append = function(item){
    document.getElementById('tasks').appendChild(item);
  };

  const deleteTask = e => {
    e.target.parentNode.remove();
  }
});
