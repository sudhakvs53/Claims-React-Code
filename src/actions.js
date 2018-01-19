export function itemsHaveError(bool) {
  return {
    type: 'ITEMS_HAVE_ERROR',
    hasError: bool
  };
}

export function itemsIsLoading(bool) {
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool
  };
}

export function itemsFetchDataSuccess(items) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items
  };
}

export function errorAfterFiveSeconds() {
  return dispatch => {
    setTimeout(() => {
      dispatch(itemsHaveError(true));
    }, 5000);
  };
}

export function itemsFetchData(url) {
  return dispatch => {
    dispatch(itemsIsLoading(true));

    fetch(url).then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      dispatch(itemsIsLoading(false));

      return response;
    }).then(response => response.json())
      .then(items => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHaveError(true)));
  };
}
