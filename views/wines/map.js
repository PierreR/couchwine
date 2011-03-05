function(doc) {
  var rating = doc.rating || 2;
  emit(rating,
      { "name": doc.name,
        "label": doc.label,
        "rating": doc.rating
      });
  
}
