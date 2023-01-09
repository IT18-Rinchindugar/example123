function Tag(props) {
  return (
    <section style={{
      backgroundColor: "#E1EBFB",
      borderRadius: 4,
      padding: 8
    }}>
      <h4 style={{ color: "#0086D6" }}>{props.name}</h4>
    </section>
  )
}

export default Tag;