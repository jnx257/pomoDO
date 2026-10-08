export default function Home() {
  return (
    <div>
      <section id="timer">
        <div>futuramente colocar um contador circular aqui</div>
      </section>
      <section className="todo">
        <label htmlFor="input-todo"></label>
        <div className="todo__title">
          <h3>Tarefas</h3>
          <i>1 pendentes - ~5 minutos</i>
        </div>
        <div className="todo__inputs">
          <input
            type="text"
            name="todo"
            id="input-todo"
            className="todo__input-text"
          />
          <input type="number" name="" id="" className="todo__input-cicles" />
          <input type="submit" value="Adicionar" />
        </div>
        <button>todas</button>
        <button>pendentes</button>
        <button>concluidas</button>

        {/* Adicionar card selector futuramente */}

        <p>
          toque numa tarefa para deixa-la em foco. Espaço inicial ou pausa o
          timer
        </p>
      </section>
    </div>
  );
}
