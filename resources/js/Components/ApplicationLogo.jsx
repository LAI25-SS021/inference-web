export default function ApplicationLogo(props) {
  return (
    <div {...props} className={`${props.collapsed ? 'text-3xl' : 'text-2xl'} font-extrabold`}>
      {props.collapsed ? 'R' : 'RupaKoe'}
    </div>
  );
}
