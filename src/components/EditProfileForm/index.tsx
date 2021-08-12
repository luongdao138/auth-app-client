import { Input } from '../../GlobalStyle';
import {
  Wrapper,
  Content,
  Header,
  FormGroup,
  Label,
  TextArea,
  Button,
  ChangeImage,
} from './EditProfileForm.styles';
import { MdCameraAlt } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import no_user from '../../assets/no_user.png';
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { User } from '../../features/auth/interface';
import axios from 'axios';
import { useHistory } from 'react-router';
import axiosClient from '../../api/axiosClient';
import { update } from '../../features/auth/authSlice';

const EditProfileForm = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const [values, setValues] = useState<User>({
    _id: user._id,
    email: user.email,
    bio: user.bio || '',
    phone: user.phone || '',
    display_name: user.display_name || '',
    photo: user.photo,
  });
  const [password, setPassword] = useState<string>('********');
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(user.photo);
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append('display_name', values.display_name as string);
    formData.append('password', password);
    formData.append('bio', values.bio as string);
    formData.append('phone', values.phone as string);
    if (file) {
      formData.append('photo', file);
    }

    try {
      const res = await axiosClient().patch('/users', formData);
      let updateUser: User = {
        _id: res.data._id,
        email: res.data.email,
        photo: res.data.photo,
        bio: res.data.bio,
        display_name: res.data.display_name,
        phone: res.data.phone,
        social_id: res.data.social_id,
      };
      dispatch(update(updateUser));
      history.push('/profile');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          history.push('/login');
        }
      } else {
        // setError('Oops! There is something wrong!');
      }
    }
  };

  const convertToPreview = useCallback((file: File | null) => {
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onloadend = () => {
        setPreviewUrl(fileReader.result as string);
      };
    }
  }, []);

  useEffect(() => {
    convertToPreview(file);
  }, [file, convertToPreview]);

  return (
    <Wrapper>
      <Content>
        <Header>
          <p className='big'>Change Info</p>
          <p className='small'>Changes will be reflected to every services</p>
        </Header>
        <form onSubmit={handleSubmit}>
          <ChangeImage>
            <input
              type='file'
              hidden
              ref={inputRef}
              onChange={(e) => {
                if (e.target.files) setFile(e.target.files[0]);
              }}
            />
            <div className='image' onClick={() => inputRef.current?.click()}>
              <img src={previewUrl || no_user} alt='' />
              <div className='black'></div>
              <MdCameraAlt />
            </div>
            <span className='change' onClick={() => inputRef.current?.click()}>
              Change photo
            </span>
          </ChangeImage>
          <FormGroup>
            <Label>Name</Label>
            <Input
              border_color='#bdbdbd'
              placeholder_color='#828282'
              color='#e0e0e0'
              font_weight={400}
              placeholder='Enter your name...'
              type='text'
              name='display_name'
              value={values.display_name}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Bio</Label>
            <TextArea
              name='bio'
              placeholder='Enter your bio...'
              value={values.bio}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Phone</Label>
            <Input
              border_color='#bdbdbd'
              placeholder_color='#828282'
              color='#e0e0e0'
              font_weight={400}
              placeholder='Enter your phone...'
              type='text'
              name='phone'
              value={values.phone}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input
              border_color='#bdbdbd'
              placeholder_color='#828282'
              color='#e0e0e0'
              font_weight={400}
              placeholder='Enter your email...'
              type='text'
              name='email'
              readOnly
              value={values.email}
              onChange={handleChange}
            />
          </FormGroup>
          {!user.social_id && (
            <FormGroup>
              <Label>Password</Label>
              <Input
                border_color='#bdbdbd'
                placeholder_color='#828282'
                color='#e0e0e0'
                font_weight={400}
                placeholder='Enter your password...'
                type='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
          )}
          <Button type='submit'>Save</Button>
        </form>
      </Content>
    </Wrapper>
  );
};

export default EditProfileForm;
