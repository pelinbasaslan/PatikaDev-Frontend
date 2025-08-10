import React, { useState } from "react";
import "./Note.css";

function Note() {
    const [notes, setNotes] = useState([]);
    const [noteText, setNoteText] = useState("");
    const [color, setColor] = useState("rgb(27, 139, 76)"); // Varsayılan yeşil
    const [search, setSearch] = useState("");
    const [selectedColor, setSelectedColor] = useState(null);

    const handleAddNote = () => {
        if (noteText.trim() === "") return;
        const newNote = { text: noteText, color: color };
        setNotes([...notes, newNote]);
        setNoteText("");
    };

    const colorOptions = [
        { name: "Pembe", value: "rgb(240, 98, 146)" }, // Pembe
        { name: "Mor", value: "rgb(186, 104, 200)" }, // Mor
        { name: "Sarı", value: "rgb(255, 213, 79)" }, // Sarı
        { name: "Mavi", value: "rgb(79, 195, 247)" }, // Mavi
        { name: "Yeşil", value: "rgb(174, 213, 129)" }, // Yeşil
    ];

    return (
        <div className="note-container">
            <h1>NotesApp</h1>

            {/* Arama inputu */}
            <input
                type="text"
                placeholder="Search..."
                className="search-input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="note-input">
                <textarea
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    placeholder="Enter your note here..."
                />

                <div className="note-container-bottom">
                    {/* Renk seçme butonları */}
                    <div className="buttons">
                        {colorOptions.map(({ value }) => (
                            <button
                                key={value}
                                style={{ backgroundColor: value }}
                                className="color-button"
                                onClick={() => setColor(value)}
                            ></button>
                        ))}
                    </div>

                    {/* Not ekleme butonu */}
                    <button type="submit" className="add-button" onClick={handleAddNote}>
                        ADD
                    </button>
                </div>
            </div>

            {/* Renk filtreleme butonları */}
            <div className="list-buttons">
                {colorOptions.map(({ name, value }) => (
                    <button
                        key={name}
                        className="list-button"
                        style={{
                            backgroundColor: value,
                            border: selectedColor === value ? "2px solid #333" : "none",
                        }}
                        onClick={() =>
                            setSelectedColor(selectedColor === value ? null : value)
                        }
                    >
                        {name}
                    </button>
                ))}
            </div>

            {/* Notları aşağıda listele */}
            <div>
                {notes.length > 0 && (
                    <>
                        <h3 style={{ color: "#222", marginTop: "30px" }}>Not List</h3>
                        <div
                            className="note-list"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "16px",
                                background: "none",
                                boxShadow: "none",
                                padding: 0,
                            }}
                        >
                            {notes
                                .filter((note) =>
                                    note.text.toLowerCase().includes(search.toLowerCase())
                                )
                                .filter(
                                    (note) => !selectedColor || note.color === selectedColor
                                )
                                .map((note, idx) => (
                                    <div
                                        key={idx}
                                        className="note-item"
                                        style={{
                                            backgroundColor: note.color,
                                            borderRadius: "8px",
                                            minWidth: "180px",
                                            maxWidth: "220px",
                                            padding: "10px",
                                            color: "#222",
                                            fontWeight: "normal",
                                            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                                            wordBreak: "break-word",
                                        }}
                                    >
                                        {note.text}
                                    </div>
                                ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Note;