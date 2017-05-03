// ----- Storage -----------------------------
var RecipeStore = function(key)
{
  // private variables
  var _key = key,
      _dataObject = _loadFromStorage();

  // private functions
  function _storageAvailable(type)
  {
    try {
      var storage = window[type],
        x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    }
    catch(e) {
      return false;
    }
  }
  function _loadFromStorage()
  {
    if (_storageAvailable('localStorage'))
    {
      return JSON.parse(localStorage.getItem(_key));
    }
  }
  function _saveToStorage()
  {
    if (_storageAvailable('localStorage'))
    {
      localStorage.setItem(_key, JSON.stringify(_dataObject));
    }
  }
  
  // public functions
  this.getFullList = function()
  {
    return _dataObject;
  };
  this.addItem = function(obj)
  {
    // add item to the data array
    _dataObject.push(obj);
    
    // save data array to local storage
    _saveToStorage();
  };
  this.updateItem = function(id, obj)
  {
    // update item in the data array
    _dataObject[id] = obj;
    
    // save data array to local storage
    _saveToStorage();
  };
  this.deleteItem = function(id)
  {
    // delete item from the data array
    _dataObject.splice(id, 1);
    
    // save data array to local storage
    _saveToStorage();
  };
}

module.exports = RecipeStore;