import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addName } from '../redux/actions/inputAction';
import User from '../components/user';

const Index = () => {
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(addName())
  }, [dispatch])

  return (
    <>
    <User />
    <Link href="/showusers">
      <a> Click here to show User</a>
    </Link>
    </>
  )
}

export default Index;