

function CartWidget() {

  const styles = {

    container: {
      textAlign: 'center',
      marginTop: '2rem',
      padding: '1rem',
      backgroundColor: '#aea8b4',
      borderRadius: '8px',
      border: '#212024, 2px, solid',
    }

  }
  return (

    <section style={styles.container}>
      <div>
        <h2>Carrito</h2>
        <div>
          🛒 <span>(0)</span>
        </div>

      </div>
    </section>
  )
}

export default CartWidget
