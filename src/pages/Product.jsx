import React from 'react';
import '../css-html/product-page.css';
import Dora from '../assets/map-dora.jpg';
import Evil from '../assets/resident-evil-food.jpg';
import Ketchup from '../assets/pexels-alena-shekhovtcova-6941017.jpg';

function Product() {
  return (
  
    /*Main content of the page*/
        <div className="content">
            <div className="left-side">
                <div className="product-holder">
                        <h4>
                            Name of Product
                        </h4>
                        <div className="productimageholder"><img className="productimage" src= { Evil } />
                        </div>
                </div>
                <div className="map">
                        <h4>
                            Locations Near You
                        </h4>
                        <div className="mapimageholder"><img className="mapimage" src= { Dora }/>
                        </div>
                </div>
            </div>
                
            <div className="right-side">
                <div className="product-infor">
                    <h4>
                        Product Information
                    </h4>
                    <div className="product-details">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla diam et sem pellentesque pellentesque. Nam odio nisi, dictum et iaculis in, ornare nec urna. Maecenas vitae purus neque. Praesent dolor nisi, porttitor at gravida quis, cursus quis libero. Phasellus vulputate felis non elit finibus imperdiet. Pellentesque sollicitudin, tellus ut pellentesque iaculis, nibh metus porta risus, sed faucibus nulla leo ut massa. Nam semper pellentesque sem. Quisque placerat diam nec eleifend consectetur. Nullam ante dolor, vulputate eu sagittis in, faucibus in augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer tincidunt est ac libero convallis tempor. Donec posuere tempor semper. Fusce a pulvinar ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                        Vestibulum id molestie ante. In iaculis, neque vel tempor dictum, metus sapien porta dui, sed pulvinar felis magna non ante. Praesent condimentum arcu at mauris convallis, sit amet aliquet lacus scelerisque. Proin hendrerit quam metus, sit amet bibendum nunc consectetur nec. Nunc dictum, sapien vitae varius fringilla, mi urna ullamcorper ipsum, sed faucibus urna sem quis odio. Aliquam feugiat at enim eu elementum. Integer sagittis sit amet neque at vehicula. Donec ut eros eros. Sed id pellentesque arcu, ut convallis metus. Sed pretium, risus a venenatis feugiat, est mi elementum sem, in sollicitudin metus velit a lectus. Vivamus ut malesuada felis. Curabitur quis nisi semper, iaculis lacus nec, ullamcorper massa. Sed auctor sit amet nisi ornare tincidunt.
                        Vestibulum elementum bibendum justo at elementum. Sed feugiat dolor eu enim facilisis hendrerit. Duis erat augue, rhoncus ac convallis vel, pretium eu velit. Mauris maximus, ipsum ut consectetur laoreet, nunc sapien sollicitudin enim, nec ornare magna eros vitae orci. Ut vitae ex quis ante bibendum mollis in ac purus. Praesent facilisis nulla elit, vitae fermentum erat commodo ac. Praesent et ullamcorper tellus, ut blandit nulla.
                        Nam suscipit pretium ligula vitae placerat. Proin quis porttitor arcu, a sollicitudin augue. Sed id pretium ex, et pharetra metus. Fusce bibendum accumsan sapien, at aliquet mi tincidunt id. Quisque placerat faucibus neque feugiat dictum. Cras mollis augue sit amet felis volutpat, nec semper massa ullamcorper. Nulla interdum vehicula bibendum. Quisque accumsan, nisi sed mattis dignissim, eros velit vehicula odio, in tempor mi ex quis nulla. Duis et odio nec ipsum lobortis dictum sed a lacus.
                        Sed dapibus, neque eu pulvinar lobortis, nisi eros tristique quam, ut posuere ligula libero vel risus. Phasellus laoreet finibus turpis, a pellentesque nulla fermentum id. Nam rhoncus semper massa vel eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor porttitor tortor, vel molestie nisi pretium quis. Aliquam erat volutpat. Praesent et est nulla. Proin ultricies erat eget quam aliquam, a porta libero finibus. Aliquam at molestie lorem, et hendrerit leo. Sed congue, felis eget pretium auctor, ligula odio blandit nunc, ac sollicitudin dui libero vitae sem. Sed non quam eu tellus imperdiet aliquet eget vitae leo. Aenean ac commodo nisi, gravida commodo ante. Cras finibus ipsum ac finibus aliquet. Sed pharetra ornare ultricies. Phasellus luctus quam eget est tincidunt rutrum.
                    </div>
                </div>
                <section className="recommended">
                        <h4>
                            You Might Also Like
                        </h4>
                        <div className='recommend-carousel'>
                            <div className='rec-items'>
                                <div className='rec-item'>
                                    <img className='recimage' src={Ketchup} alt='ketchup' />
                                    <p>Product 1</p>
                                </div>
                                <div className='rec-item'>
                                    <img className='recimage' src={Ketchup} alt='ketchup' />
                                    <p>Product 2</p>
                                </div>
                                <div className='rec-item'>
                                    <img className='recimage' src={Ketchup} alt='ketchup' />
                                    <p>Product 3</p>
                                </div>
                                <div className='rec-item'>
                                    <img className='recimage' src={Ketchup} alt='ketchup' />
                                    <p>Product 4</p>
                                </div>
                                <div className='rec-item'>
                                    <img className='recimage' src={Ketchup} alt='ketchup' />
                                    <p>Product 5</p>
                                </div>
                                <div className='rec-item'>
                                    <img className='recimage' src={Ketchup} alt='ketchup' />
                                    <p>Product 6</p>
                                </div>
                            </div>
                        </div>
                </section>
            </div>
        </div>
  )
}

export default Product;