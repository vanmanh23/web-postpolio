
type Props = {
    title: string
}
export default function Button({title}: Props) {
  return (
    <div>
        <button className='bg-primary text-white px-4 py-2 rounded-md'>{title}</button>
    </div>
  )
}
