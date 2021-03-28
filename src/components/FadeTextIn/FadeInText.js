import { useSpring, animated } from 'react-spring'

function FadeInText(props) {
  const spring = useSpring({
    to: { opacity: 1, color: 'white' },
    from: { opacity: 0, color: 'red' }
  })

  return (
    <animated.div style={spring}>{props.name}</animated.div>
  )

}

export default FadeInText;
