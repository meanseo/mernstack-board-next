import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { addArticleRequest } from '@/modules/board/addArticle';
import { AddArticle } from '@/components/board/AddArticle';

const AddArticlePage = () => {
  const [article, setArticle] =useState({
    date:'',name:'',title:'', subject: ''
})
  const dispatch = useDispatch()
  const onChange = e =>{
      e.preventDefault()
      const{name, value} = e.target;
      setArticle({...article,[name]: value})
  }
  const onSubmit = e => {
    e.preventDefault()
    alert('등록 되었습니다:'+JSON.stringify(article))
    dispatch(addArticleRequest(article))
  }
  return (
    <AddArticle onChange= {onChange} onSubmit={onSubmit}/>
  );
};
const mapStateToProps = state => ({isAdded: state.addArticle.isAdded})
const addArticleActions = {addArticleRequest}
export default connect(mapStateToProps, addArticleActions)(AddArticlePage)