const tags = [
  { id: 1, text: "Infrastructure Development" },
{ id: 2, text: "Residential Construction" },
{ id: 3, text: "Commercial Projects" },
{ id: 4, text: "Sustainable Building" },
{ id: 5, text: "Civil Engineering" },
{ id: 6, text: "Project Management" },
{ id: 7, text: "Turnkey Solutions" },
{ id: 8, text: "Renovation Services" },
{ id: 9, text: "Structural Design" },
{ id: 10, text: "Green Construction" },
];

export default function Tags() {
  return (
    <div className="sidebar__widget">
      <h4 className="sidebar__widget-title">Tags</h4>
      <div className="sidebar__tag-list">
        <ul className="list-wrap">
          {tags.map((category) => (
            <li key={category.id}>
              <a href="#">{category.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
