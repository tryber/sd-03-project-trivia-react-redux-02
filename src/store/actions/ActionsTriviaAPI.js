export const GET_TOKEN_LOADING = 'GET_TOKEN_LOADING';
export const GET_TOKEN_SUCCESS = 'GET_TOKEN_SUCCESS';
export const GET_TOKEN_ERROR = 'GET_TOKEN_ERROR';
export const GET_QUESTIONS_LOADING = 'GET_QUESTIONS_LOADING';
export const GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS';
export const GET_QUESTIONS_ERROR = 'GET_QUESTIONS_ERROR';

export const getTokenLoading = () => ({
    type: GET_TOKEN_LOADING,
});

export const getTokenSuccess = (token) => ({
    type: GET_TOKEN_SUCCESS,
    payload: {
        token,
    }
});

export const getTokenError = (error) => ({
    type: GET_TOKEN_ERROR,
    payload: {
        error,
    }
});

export const getQuestionsLoading = () => ({
    type: GET_QUESTIONS_LOADING,
});

export const getQuestionsSuccess = (questions) => ({
    type: GET_QUESTIONS_SUCCESS,
    payload: {
        questions,
    }
});

export const getQuestionsError = (error) => ({
    type: GET_QUESTIONS_ERROR,
    payload: {
        error,
    }
});