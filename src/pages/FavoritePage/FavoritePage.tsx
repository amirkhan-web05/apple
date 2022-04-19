import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../hooks/useAppSelector'
import { removeUser } from '../../redux/actions/auth'
import { TypeAuth } from '../../types'
import styles from './Favorite.module.scss'


export const FavoritePage:React.FC = ():JSX.Element => {
  const dispatch = useDispatch()
  const auth = useAppSelector(state => state.auth.auth)
  const [image, setImage] = React.useState<File | null>()
  const [preview, setPreview] = React.useState<string | null>()
  const fileInputRef = useRef<HTMLInputElement | any>()

  const logoutUser = (id:any) => {
    dispatch(removeUser(id))
  }

  React.useEffect(() => {
    if (image) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(image)
    } else {
      setPreview(null)
    }
  }, [image])

  return (
    <div className='container mt-5'>
      <form className={styles.acc__photo}>
        
        {preview ?<>
          <img width={250} height={250} src={preview} alt="" />
        </> : 
        <button onClick={(event) => {
          event.preventDefault()
          fileInputRef.current?.click()
        }}>
          Add images
        </button>        
        }        
        <input 
          type="file" 
          accept='image/*'
          style={{display:'none'}} 
          ref={fileInputRef}
          onChange={(event:any) => {
            const file = event.target.files[0]
            if (file && file.type.substr(0, 5) === 'image') {
              setImage(file)
            } else {
              setImage(null)
            }
          }} 
        />
      </form>
      <h1>{auth?.name}</h1>
      <button onClick={() => logoutUser(auth?.id)} className='btn btn-primary'>Logout</button>
    </div>
  )
}
