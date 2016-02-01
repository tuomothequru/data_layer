// Datalayer to track purchases
window.dataLayer = window.dataLayer || [];
dataLayer.push({
  'event': 'purchase',
  'ecommerce': {
    'purchase': {
      'actionField': {
        'id': 'T12345',                         // Transaction ID. Required for purchases and refunds. Required field.
        'affiliation': 'Online Store',
        'revenue': '168.89',                     // Total transaction value (incl. tax and shipping)
        'tax':'4.90',
        'shipping': '5.99',           
        'coupon': ''                            // Promo code
      },
      'products': [{                            // List of products
        'name': 'Tagging',             					// Name or ID is required.
        'id': '12345',
        'price': '115.00',
        'brand': 'Quru',
        'category': 'Services',
        'variant': 'super',
        'quantity': 1,
        'coupon': ''                            // Optional fields may be omitted or set to empty string.
       },
       {
        'name': 'SEO',
        'id': '980',
        'price': '43.00',
        'brand': 'Quru',
        'category': 'services',
        'variant': 'extra',
        'quantity': 1
       }]
    }
  }
});
