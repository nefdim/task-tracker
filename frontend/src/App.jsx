import { useEffect, useState } from "react";

const styles = {
  root: {
    minHeight: "100vh",
    background: "#0f1117",
    color: "#e8eaf0",
    fontFamily: "'Georgia', serif",
    padding: "0 0 60px 0",
  },
  header: {
    background: "linear-gradient(135deg, #1a1d2e 0%, #0f1117 100%)",
    borderBottom: "1px solid #2a2d3e",
    padding: "32px 0 28px 0",
    textAlign: "center",
    marginBottom: 40,
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: "bold",
    letterSpacing: 2,
    color: "#ffffff",
    margin: 0,
  },
  headerSub: {
    color: "#6b7280",
    marginTop: 6,
    fontSize: 14,
    letterSpacing: 1,
  },
  container: {
    maxWidth: 960,
    margin: "0 auto",
    padding: "0 20px",
  },
  formCard: {
    background: "#1a1d2e",
    border: "1px solid #2a2d3e",
    borderRadius: 12,
    padding: 24,
    marginBottom: 40,
  },
  formTitle: {
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 2,
    color: "#6b7280",
    textTransform: "uppercase",
    marginBottom: 16,
    marginTop: 0,
  },
  input: {
    display: "block",
    width: "100%",
    padding: "12px 14px",
    marginBottom: 12,
    background: "#0f1117",
    border: "1px solid #2a2d3e",
    borderRadius: 8,
    color: "#e8eaf0",
    fontSize: 15,
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
  },
  textarea: {
    display: "block",
    width: "100%",
    padding: "12px 14px",
    marginBottom: 16,
    background: "#0f1117",
    border: "1px solid #2a2d3e",
    borderRadius: 8,
    color: "#e8eaf0",
    fontSize: 15,
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
    resize: "vertical",
    minHeight: 80,
  },
  addButton: {
    background: "#4f6ef7",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    padding: "12px 28px",
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 1,
    cursor: "pointer",
  },
  columnsWrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 20,
  },
  column: {
    background: "#1a1d2e",
    border: "1px solid #2a2d3e",
    borderRadius: 12,
    padding: 16,
    minHeight: 300,
  },
  columnHeader: (color) => ({
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 2,
    textTransform: "uppercase",
    color: color,
    marginBottom: 16,
    paddingBottom: 10,
    borderBottom: `2px solid ${color}`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }),
  columnCount: {
    fontSize: 11,
    fontWeight: "normal",
    opacity: 0.7,
  },
  taskCard: {
    background: "#0f1117",
    border: "1px solid #2a2d3e",
    borderRadius: 8,
    padding: "12px 14px",
    marginBottom: 10,
  },
  taskTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#c7d2fe",
    cursor: "pointer",
    display: "block",
    marginBottom: 8,
  },
  actionRow: {
    display: "flex",
    gap: 6,
    flexWrap: "wrap",
    marginTop: 8,
  },
  statusBtn: (active) => ({
    padding: "4px 10px",
    fontSize: 11,
    borderRadius: 6,
    border: active ? "1px solid #4f6ef7" : "1px solid #2a2d3e",
    background: active ? "#4f6ef7" : "transparent",
    color: active ? "#fff" : "#6b7280",
    cursor: "pointer",
    fontWeight: "bold",
    letterSpacing: 0.5,
  }),
  deleteBtn: {
    padding: "4px 10px",
    fontSize: 11,
    borderRadius: 6,
    border: "1px solid #3f1515",
    background: "transparent",
    color: "#f87171",
    cursor: "pointer",
    fontWeight: "bold",
    marginLeft: "auto",
  },
  detailBox: {
    marginTop: 12,
    padding: 12,
    background: "#1a1d2e",
    borderRadius: 8,
    borderTop: "1px solid #2a2d3e",
    fontSize: 13,
    lineHeight: 1.8,
  },
  detailLabel: {
    color: "#6b7280",
    fontWeight: "bold",
    fontSize: 10,
    letterSpacing: 1,
    textTransform: "uppercase",
    display: "block",
    marginBottom: 2,
    marginTop: 10,
  },
  detailValue: {
    color: "#e8eaf0",
    fontSize: 13,
  },
  closeBtn: {
    marginTop: 12,
    padding: "5px 14px",
    fontSize: 11,
    borderRadius: 6,
    border: "1px solid #2a2d3e",
    background: "transparent",
    color: "#6b7280",
    cursor: "pointer",
  },
  emptyCol: {
    color: "#374151",
    fontSize: 13,
    textAlign: "center",
    paddingTop: 40,
  }
};

const COLUMNS = [
  { label: "Open", color: "#60a5fa" },
  { label: "In Progress", color: "#fbbf24" },
  { label: "Completed", color: "#4ade80" },
];

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [expandedTaskId, setExpandedTaskId] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    fetch("http://127.0.0.1:8000/tasks")
      .then(res => res.json())
      .then(data => setTasks(data));
  };

  const createTask = () => {
    if (!title.trim()) return;
    fetch("http://127.0.0.1:8000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description })
    })
      .then(res => res.json())
      .then(newTask => {
        setTasks([...tasks, newTask]);
        setTitle("");
        setDescription("");
      });
  };

  const updateStatus = (task, newStatus) => {
    fetch(`http://127.0.0.1:8000/tasks/${task.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus })
    })
      .then(res => res.json())
      .then(updated => {
        setTasks(tasks.map(t => t.id === updated.id ? updated : t));
        setExpandedTaskId(null);
      });
  };

  const deleteTask = (taskId) => {
    fetch(`http://127.0.0.1:8000/tasks/${taskId}`, { method: "DELETE" })
      .then(() => {
        setTasks(tasks.filter(t => t.id !== taskId));
        if (expandedTaskId === taskId) setExpandedTaskId(null);
      });
  };

  const toggleDetail = (taskId) => {
    setExpandedTaskId(expandedTaskId === taskId ? null : taskId);
  };

  return (
    <div style={styles.root}>
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>TASK MANAGER</h1>
        <p style={styles.headerSub}>{tasks.length} task{tasks.length !== 1 ? "s" : ""} total</p>
      </div>

      <div style={styles.container}>
        {/* Create Task Form */}
        <div style={styles.formCard}>
          <p style={styles.formTitle}>New Task</p>
          <input
            style={styles.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task title"
            onKeyDown={(e) => e.key === "Enter" && createTask()}
          />
          <textarea
            style={styles.textarea}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Task description (optional)"
          />
          <button style={styles.addButton} onClick={createTask}>
            + ADD TASK
          </button>
        </div>

        {/* Three Columns */}
        <div style={styles.columnsWrapper}>
          {COLUMNS.map(col => {
            const colTasks = tasks.filter(t => t.status === col.label);
            return (
              <div key={col.label} style={styles.column}>
                <div style={styles.columnHeader(col.color)}>
                  <span>{col.label}</span>
                  <span style={styles.columnCount}>{colTasks.length}</span>
                </div>

                {colTasks.length === 0 && (
                  <div style={styles.emptyCol}>No tasks</div>
                )}

                {colTasks.map(task => (
                  <div key={task.id} style={styles.taskCard}>
                    <span
                      style={styles.taskTitle}
                      onClick={() => toggleDetail(task.id)}
                    >
                      {task.title || "Untitled Task"}
                    </span>

                    <div style={styles.actionRow}>
                      {["Open", "In Progress", "Completed"].map(s => (
                        <button
                          key={s}
                          style={styles.statusBtn(task.status === s)}
                          onClick={() => updateStatus(task, s)}
                        >
                          {s}
                        </button>
                      ))}
                      <button style={styles.deleteBtn} onClick={() => deleteTask(task.id)}>
                        Delete
                      </button>
                    </div>

                    {expandedTaskId === task.id && (
                      <div style={styles.detailBox}>
                        <span style={styles.detailLabel}>Title</span>
                        <span style={styles.detailValue}>{task.title || "—"}</span>
                        <span style={styles.detailLabel}>Description</span>
                        <span style={styles.detailValue}>{task.description || "No description provided."}</span>
                        <span style={styles.detailLabel}>Status</span>
                        <span style={styles.detailValue}>{task.status}</span>
                        <br />
                        <button style={styles.closeBtn} onClick={() => toggleDetail(task.id)}>
                          Close
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;