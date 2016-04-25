!function(e){"use strict";"function"==typeof define&&define.amd?define([],function(){return e(window,document)}):"undefined"!=typeof exports?module.exports=e(window,document):window.wysiwyg=e(window,document)}(function(e,t){"use strict";var n=function(e,t,n){var r;return function(){if(r){if(!n)return;clearTimeout(r)}var o=this,i=arguments;r=setTimeout(function(){r=null,e.apply(o,i)},t)}},r=function(t,n,r,o){t.addEventListener?t.addEventListener(n,r,o?!0:!1):t.attachEvent?t.attachEvent("on"+n,r):t!=e&&(t["on"+n]=r)},o=function(t,n,r,o){t.removeEventListener?t.removeEventListener(n,r,o?!0:!1):t.detachEvent?t.detachEvent("on"+n,r):t!=e&&(t["on"+n]=null)},i=function(e,n,r,o){if(t.createEvent){var i=t.createEvent("Event");i.initEvent(n,void 0!==r?r:!0,void 0!==o?o:!1),e.dispatchEvent(i)}else if(t.createEventObject){var i=t.createEventObject();e.fireEvent("on"+n,i)}else"function"==typeof e["on"+n]&&e["on"+n]()},a=function(e){return e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,!1},l="undefined"!=typeof Node?Node.ELEMENT_NODE:1,u="undefined"!=typeof Node?Node.TEXT_NODE:3,f=function(e,t){for(var n=t;n;){if(n===e)return!0;n=n.parentNode}return!1},c=function(e,t){if(e.firstChild)return e.firstChild;for(;e;){if(e==t)return null;if(e.nextSibling)return e.nextSibling;e=e.parentNode}return null},s=function(n){if(e.getSelection){var r=e.getSelection();if(r.rangeCount>0)return r.getRangeAt(0)}else if(t.selection){var r=t.selection;return r.createRange()}return null},d=function(n,r){if(r)if(e.getSelection){var o=e.getSelection();o.removeAllRanges(),o.addRange(r)}else t.selection&&r.select()},p=function(){if(e.getSelection){var n=e.getSelection();if(!n.rangeCount)return!1;var r=n.getRangeAt(0).cloneRange();if(r.getBoundingClientRect){var o=r.getBoundingClientRect();if(o&&o.left&&o.top&&o.right&&o.bottom)return{left:parseInt(o.left),top:parseInt(o.top),width:parseInt(o.right-o.left),height:parseInt(o.bottom-o.top)};for(var i=r.getClientRects?r.getClientRects():[],a=0;a<i.length;++a){var o=i[a];if(o.left&&o.top&&o.right&&o.bottom)return{left:parseInt(o.left),top:parseInt(o.top),width:parseInt(o.right-o.left),height:parseInt(o.bottom-o.top)}}}}else if(t.selection){var n=t.selection;if("Control"!=n.type){var r=n.createRange();if(r.boundingLeft||r.boundingTop||r.boundingWidth||r.boundingHeight)return{left:r.boundingLeft,top:r.boundingTop,width:r.boundingWidth,height:r.boundingHeight}}}return!1},g=function(n){if(e.getSelection){var r=e.getSelection();return r.isCollapsed?!0:!1}if(t.selection){var r=t.selection;if("Text"==r.type){var o=t.selection.createRange(),i=t.body.createTextRange();return i.moveToElementText(n),i.setEndPoint("EndToStart",o),0==o.htmlText.length}if("Control"==r.type)return!1}return!0},v=function(n){if(e.getSelection){var r=e.getSelection();if(!r.rangeCount)return[];for(var o=[],i=0;i<r.rangeCount;++i)for(var a=r.getRangeAt(i),u=a.startContainer,s=a.endContainer;u;){if(u!=n){var d=!1;if(r.containsNode)d=r.containsNode(u,!0);else{var p=t.createRange();p.selectNodeContents(u);for(var i=0;i<r.rangeCount;++i){var a=r.getRangeAt(i);if(a.compareBoundaryPoints(a.END_TO_START,p)>=0&&a.compareBoundaryPoints(a.START_TO_END,p)<=0){d=!0;break}}}d&&o.push(u)}u=c(u,u==s?s:n)}return 0==o.length&&f(n,r.focusNode)&&r.focusNode!=n&&o.push(r.focusNode),o}if(t.selection){var r=t.selection;if("Text"==r.type){for(var o=[],g=r.createRangeCollection(),i=0;i<g.length;++i)for(var a=g[i],v=a.parentElement(),u=v;u;){var p=a.duplicate();if(p.moveToElementText(u.nodeType!=l?u.parentNode:u),p.compareEndPoints("EndToStart",a)>=0&&p.compareEndPoints("StartToEnd",a)<=0){for(var h=!1,m=0;m<o.length;++m)if(o[m]===u){h=!0;break}h||o.push(u)}u=c(u,v)}return 0==o.length&&f(n,t.activeElement)&&t.activeElement!=n&&o.push(t.activeElement),o}if("Control"==r.type){for(var o=[],a=r.createRange(),i=0;i<a.length;++i)o.push(a(i));return o}}return[]},h=function(){if(e.getSelection){var n=e.getSelection();if(!n.isCollapsed)try{n.collapseToEnd()}catch(r){}}else if(t.selection){var n=t.selection;if("Control"!=n.type){var o=n.createRange();o.collapse(!1),o.select()}}},m=function(n,r,o){if(e.getSelection){var i=e.getSelection();if(i.modify){for(var a=0;r>a;++a)i.modify("extend","backward","character");for(var a=0;o>a;++a)i.modify("extend","forward","character")}else{var l=i.getRangeAt(0);l.setStart(l.startContainer,l.startOffset-r),l.setEnd(l.endContainer,l.endOffset+o),i.removeAllRanges(),i.addRange(l)}}else if(t.selection){var i=t.selection;if("Control"!=i.type){var l=i.createRange();l.collapse(!0),l.moveStart("character",-r),l.moveEnd("character",o),l.select()}}},y=function(n){if(g(n))return null;if(e.getSelection){var r=e.getSelection();if(r.rangeCount){for(var o=t.createElement("div"),i=r.rangeCount,a=0;i>a;++a){var l=r.getRangeAt(a).cloneContents();o.appendChild(l)}return o.innerHTML}}else if(t.selection){var r=t.selection;if("Text"==r.type){var u=r.createRange();return u.htmlText}}return null},T=function(n,r){if(e.getSelection){var o=e.getSelection();if(f(n,o.anchorNode)&&f(n,o.focusNode))return!0;if(!r)return!1;var i=t.createRange();i.selectNodeContents(n),i.collapse(!1),o.removeAllRanges(),o.addRange(i)}else if(t.selection){var o=t.selection;if("Control"==o.type){var i=o.createRange();if(0!=i.length&&f(n,i(0)))return!0}else{var a=t.body.createTextRange();a.moveToElementText(n);var i=o.createRange();if(a.inRange(i))return!0}if(!r)return!1;var i=t.body.createTextRange();i.moveToElementText(n),i.setEndPoint("StartToEnd",i),i.select()}return!0},b=function(n,r){if(e.getSelection){var o=e.getSelection();if(o.getRangeAt&&o.rangeCount){var i=o.getRangeAt(0),a=t.createElement("div");a.innerHTML=r;for(var l,u,c=t.createDocumentFragment();l=a.firstChild;)u=c.appendChild(l);f(n,i.commonAncestorContainer)?(i.deleteContents(),i.insertNode(c)):n.appendChild(c),u&&(i=i.cloneRange(),i.setStartAfter(u),i.collapse(!0),o.removeAllRanges(),o.addRange(i))}}else if(t.selection){var o=t.selection;if("Control"!=o.type){var s=o.createRange();s.collapse(!0);var i=o.createRange();if(f(n,i.parentElement()))i.pasteHTML(r);else{var d=t.body.createTextRange();d.moveToElementText(n),d.collapse(!1),d.select(),d.pasteHTML(r)}i=o.createRange(),i.setEndPoint("StartToEnd",s),i.select()}}},E=function(E){E=E||{};var C=E.element||null;"string"==typeof C&&(C=t.getElementById(C));var R=E.onKeyDown||null,S=E.onKeyPress||null,L=E.onKeyUp||null,N=E.onSelection||null,A=E.onPlaceholder||null,x=E.onOpenpopup||null,M=E.onClosepopup||null,w=E.hijackContextmenu||!1,I=E.readOnly||!1,H="TEXTAREA"==C.nodeName||"INPUT"==C.nodeName;if(H){var k="contentEditable"in t.body;if(k){var O=navigator.userAgent.match(/(?:iPad|iPhone|Android).* AppleWebKit\/([^ ]+)/);O&&420<=parseInt(O[1])&&parseInt(O[1])<534&&(k=!1)}if(!k){var P=C,D=function(e){return e.replace(/<br[ \/]*>\n?/gi,"<br>\n")};P.value=D(P.value);var B=function(){return this},j=function(){return null};return{legacy:!0,getElement:function(){return P},getHTML:function(){return P.value},setHTML:function(e){return P.value=D(e),this},getSelectedHTML:j,sync:B,readOnly:function(e){return void 0===e?P.hasAttribute?P.hasAttribute("readonly"):!!P.getAttribute("readonly"):(e?P.setAttribute("readonly","readonly"):P.removeAttribute("readonly"),this)},collapseSelection:B,expandSelection:B,openPopup:j,closePopup:B,removeFormat:B,bold:B,italic:B,underline:B,strikethrough:B,forecolor:B,highlight:B,fontName:B,fontSize:B,subscript:B,superscript:B,align:B,format:B,indent:B,insertLink:B,insertImage:B,insertHTML:B,insertList:B}}}var P=null,K=null;if(H){P=C,P.style.display="none",K=t.createElement("DIV"),K.innerHTML=P.value||"";var X=P.parentNode,W=P.nextSibling;W?X.insertBefore(K,W):X.appendChild(K)}else K=C;I||K.setAttribute("contentEditable","true");var Y,_=t.all&&(!t.documentMode||t.documentMode<=8)?t:e,F=null;if(H){var V=K.innerHTML;F=function(){var e=K.innerHTML;e!=V&&(P.value=e,V=e,i(P,"change",!1))};var q=P.form;q&&r(q,"reset",function(){K.innerHTML="",F(),Y(!0)})}var z;if(A){var U=!1;z=function(){for(var e=!0,t=K;t;)if(t=c(t,K)){if(t.nodeType==l){if("IMG"==t.nodeName){e=!1;break}}else if(t.nodeType==u){var n=t.nodeValue;if(n&&-1!=n.search(/[^\s]/)){e=!1;break}}}else;U!=e&&(A(e),U=e)},z()}var G=null,J=null,Q=null;N&&(J=function(t,n,r){var o=g(K),i=v(K),a=null===t||null===n?null:{left:t,top:n,width:0,height:0},u=p();if(u&&(a=u),a){if(K.getBoundingClientRect){var f=K.getBoundingClientRect();a.left-=parseInt(f.left),a.top-=parseInt(f.top)}else{var c=K,s=0,d=0,h=!1;do s+=c.offsetLeft?parseInt(c.offsetLeft):0,d+=c.offsetTop?parseInt(c.offsetTop):0,"fixed"==c.style.position&&(h=!0);while(c=c.offsetParent);a.left-=s-(h?0:e.pageXOffset),a.top-=d-(h?0:e.pageYOffset)}a.left<0&&(a.left=0),a.top<0&&(a.top=0),a.width>K.offsetWidth&&(a.width=K.offsetWidth),a.height>K.offsetHeight&&(a.height=K.offsetHeight)}else if(i.length)for(var m=0;m<i.length;++m){var c=i[m];if(c.nodeType==l){a={left:c.offsetLeft,top:c.offsetTop,width:c.offsetWidth,height:c.offsetHeight};break}}N(o,a,i,r)},Q=n(J,1));var Z=null,$=function(t){if(!t)var t=e.event;var n=t.target||t.srcElement;n.nodeType==u&&(n=n.parentNode),f(Z,n)||te()},ee=function(){if(Z)return Z;r(_,"mousedown",$,!0),Z=t.createElement("DIV");var e=K.parentNode,n=K.nextSibling;return n?e.insertBefore(Z,n):e.appendChild(Z),x&&x(),Z},te=function(){Z&&(Z.parentNode.removeChild(Z),Z=null,o(_,"mousedown",$,!0),M&&M())};r(K,"focus",function(){P&&i(P,"focus",!1)}),r(K,"blur",function(){F&&F(),P&&i(P,"blur",!1)});var ne=null;if(z||F){var re=F?n(F,250,!0):null,oe=function(e){z&&z(),re&&re()};ne=n(oe,1),r(K,"input",ne),r(K,"DOMNodeInserted",ne),r(K,"DOMNodeRemoved",ne),r(K,"DOMSubtreeModified",ne),r(K,"DOMCharacterDataModified",ne),r(K,"propertychange",ne),r(K,"textInput",ne),r(K,"paste",ne),r(K,"cut",ne),r(K,"drop",ne)}var ie=function(t,n){if(!t)var t=e.event;var r=t.which||t.keyCode,o=String.fromCharCode(r||t.charCode),i=t.shiftKey||!1,l=t.altKey||!1,u=t.ctrlKey||!1,f=t.metaKey||!1;if(1==n){if(R&&R(r,o,i,l,u,f)===!1)return a(t)}else if(2==n){if(S&&S(r,o,i,l,u,f)===!1)return a(t)}else if(3==n&&L&&L(r,o,i,l,u,f)===!1)return a(t);if((2==n||3==n)&&(G=null,Q&&Q(null,null,!1)),2==n&&ne)switch(r){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:break;default:ne()}};r(K,"keydown",function(e){return ie(e,1)}),r(K,"keypress",function(e){return ie(e,2)}),r(K,"keyup",function(e){return ie(e,3)});var ae=function(t,n){if(!t)var t=e.event;var r=null,i=null;t.clientX&&t.clientY?(r=t.clientX,i=t.clientY):t.pageX&&t.pageY&&(r=t.pageX-e.pageXOffset,i=t.pageY-e.pageYOffset),t.which&&3==t.which?n=!0:t.button&&2==t.button&&(n=!0),o(_,"mouseup",ae),G=null,(w||!n)&&Q&&Q(r,i,n)};r(K,"mousedown",function(e){o(_,"mouseup",ae),r(_,"mouseup",ae)}),r(K,"mouseup",function(e){ae(e),ne&&ne()}),r(K,"dblclick",function(e){ae(e)}),r(K,"selectionchange",function(e){ae(e)}),w&&r(K,"contextmenu",function(e){return ae(e,!0),a(e)});var le=function(n,r,o){if(d(K,G),K.focus(),!T(K,o))return!1;if(e.getSelection)try{return t.queryCommandSupported&&!t.queryCommandSupported(n)?!1:t.execCommand(n,!1,r)}catch(i){}else if(t.selection){var a=t.selection;if("None"!=a.type){var l=a.createRange();try{return l.queryCommandEnabled(n)?l.execCommand(n,!1,r):!1}catch(i){}}}return!1},ue=null,fe=function(){(t.all||e.MSInputMethodContext)&&(ue=t.createElement("DIV"),K.appendChild(ue))};return Y=function(e){ue&&(K.removeChild(ue),ue=null),ne&&ne(),e?(h(),G=null):G&&(G=s(K))},{getElement:function(){return K},getHTML:function(){return K.innerHTML},setHTML:function(e){return K.innerHTML=e||"<br>",Y(!0),this},getSelectedHTML:function(){return d(K,G),T(K)?y(K):null},sync:function(){return F&&F(),this},readOnly:function(e){return void 0===e?K.hasAttribute?!K.hasAttribute("contentEditable"):!K.getAttribute("contentEditable"):(e?K.removeAttribute("contentEditable"):K.setAttribute("contentEditable","true"),this)},collapseSelection:function(){return h(),G=null,this},expandSelection:function(e,t){return d(K,G),T(K)?(m(K,e,t),G=s(K),this):this},openPopup:function(){return G||(G=s(K)),ee()},closePopup:function(){return te(),this},removeFormat:function(){return le("removeFormat"),le("unlink"),Y(),this},bold:function(){return le("bold"),Y(),this},italic:function(){return le("italic"),Y(),this},underline:function(){return le("underline"),Y(),this},strikethrough:function(){return le("strikeThrough"),Y(),this},forecolor:function(e){return le("foreColor",e),Y(),this},highlight:function(e){return le("hiliteColor",e)||le("backColor",e),Y(),this},fontName:function(e){return le("fontName",e),Y(),this},fontSize:function(e){return le("fontSize",e),Y(),this},subscript:function(){return le("subscript"),Y(),this},superscript:function(){return le("superscript"),Y(),this},align:function(e){return fe(),"left"==e?le("justifyLeft"):"center"==e?le("justifyCenter"):"right"==e?le("justifyRight"):"justify"==e&&le("justifyFull"),Y(),this},format:function(e){return fe(),le("formatBlock",e),Y(),this},indent:function(e){return fe(),le(e?"outdent":"indent"),Y(),this},insertLink:function(e){return le("createLink",e),Y(!0),this},insertImage:function(e){return le("insertImage",e,!0),Y(!0),this},insertHTML:function(e){return le("insertHTML",e,!0)||(d(K,G),T(K,!0),b(K,e)),Y(!0),this},insertList:function(e){return fe(),le(e?"insertOrderedList":"insertUnorderedList"),Y(),this}}};return E});

(function(window, document, $, undefined){
    'use strict';

    // http://stackoverflow.com/questions/17242144/javascript-convert-hsb-hsv-color-to-rgb-accurately
    var HSVtoRGB = function( h, s, v )
    {
        var r, g, b, i, f, p, q, t;
        i = Math.floor(h * 6);
        f = h * 6 - i;
        p = v * (1 - s);
        q = v * (1 - f * s);
        t = v * (1 - (1 - f) * s);
        switch (i % 6)
        {
            case 0: r = v, g = t, b = p; break;
            case 1: r = q, g = v, b = p; break;
            case 2: r = p, g = v, b = t; break;
            case 3: r = p, g = q, b = v; break;
            case 4: r = t, g = p, b = v; break;
            case 5: r = v, g = p, b = q; break;
        }
        var hr = Math.floor(r * 255).toString(16);
        var hg = Math.floor(g * 255).toString(16);
        var hb = Math.floor(b * 255).toString(16);
        return '#' + (hr.length < 2 ? '0' : '') + hr +
                     (hg.length < 2 ? '0' : '') + hg +
                     (hb.length < 2 ? '0' : '') + hb;
    };

    // Create the Editor
    var create_editor = function( $textarea, classes, placeholder, toolbar_position, toolbar_buttons, toolbar_submit, label_dropfileclick,
                                  placeholder_url, max_imagesize, onImageUpload, onKeyEnter )
    {
        // Content: Insert link
        var wysiwygeditor_insertLink = function( wysiwygeditor, url )
        {
            if( ! url )
                return wysiwygeditor;
            var selectedhtml = wysiwygeditor.getSelectedHTML();
            if( selectedhtml )
                return wysiwygeditor.insertLink( url );
            var html = '<a href="' + url.replace(/"/,'&quot;') + '">' + url + '</a>';
            return wysiwygeditor.insertHTML( html );
        };
        var content_insertlink = function(wysiwygeditor, $modify_link)
        {
            var $button = toolbar_button( toolbar_submit );
            var $inputurl = $('<input type="text" value="' + ($modify_link ? $modify_link.attr('href') : '') + '"' + (placeholder_url ? ' placeholder="'+placeholder_url+'"' : '') + ' />').addClass('wysiwyg-input')
                                .keypress(function(event){
                                    if( event.which != 10 && event.which != 13 )
                                        return ;
                                    if( $modify_link )
                                    {
                                        $modify_link.attr( 'href', $inputurl.val() );
                                        wysiwygeditor.closePopup().collapseSelection();
                                    }
                                    else
                                    {
                                        // Catch 'NS_ERROR_FAILURE' on Firefox 34
                                        try {
                                            wysiwygeditor_insertLink(wysiwygeditor,$inputurl.val()).closePopup().collapseSelection();
                                        }
                                        catch( e ) {
                                            wysiwygeditor.closePopup();
                                        }
                                    }
                                });
            var $okaybutton = $button.click(function(event){
                                    if( $modify_link )
                                    {
                                        $modify_link.attr( 'href', $inputurl.val() );
                                        wysiwygeditor.closePopup().collapseSelection();
                                    }
                                    else
                                        wysiwygeditor_insertLink(wysiwygeditor,$inputurl.val()).closePopup().collapseSelection();
                                    event.stopPropagation();
                                    event.preventDefault();
                                    return false;
                                });
            var $content = $('<div/>').addClass('wysiwyg-toolbar-form')
                                      .attr('unselectable','on');
            $content.append($inputurl).append($okaybutton);
            return $content;
        };

        // Content: Insert image
        var content_insertimage = function(wysiwygeditor)
        {
            // Add image to editor
            var insert_image_wysiwyg = function( url, filename )
            {
                var html = '<img id="wysiwyg-insert-image" src="" alt=""' + (filename ? ' title="'+filename.replace(/"/,'&quot;')+'"' : '') + ' />';
                wysiwygeditor.insertHTML( html ).closePopup().collapseSelection();
                var $image = $('#wysiwyg-insert-image').removeAttr('id');
                if( max_imagesize )
                {
                    $image.css({maxWidth: max_imagesize[0]+'px',
                                maxHeight: max_imagesize[1]+'px'})
                          .load( function() {
                                $image.css({maxWidth: '',
                                            maxHeight: ''});
                                // Resize $image to fit "clip-image"
                                var image_width = $image.width(),
                                    image_height = $image.height();
                                if( image_width > max_imagesize[0] || image_height > max_imagesize[1] )
                                {
                                    if( (image_width/image_height) > (max_imagesize[0]/max_imagesize[1]) )
                                    {
                                        image_height = parseInt(image_height / image_width * max_imagesize[0]);
                                        image_width = max_imagesize[0];
                                    }
                                    else
                                    {
                                        image_width = parseInt(image_width / image_height * max_imagesize[1]);
                                        image_height = max_imagesize[1];
                                    }
                                    $image.attr('width',image_width)
                                          .attr('height',image_height);
                                }
                            });
                }
                $image.attr('src', url);
            };
            // Create popup
            var $content = $('<div/>').addClass('wysiwyg-toolbar-form')
                                      .attr('unselectable','on');
            // Add image via 'Browse...'
            var $fileuploader = null;
            if( window.File && window.FileReader && window.FileList )
            {
                // File-API
                var loadImageFromFile = function( file )
                {
                    // Only process image files
                    if( ! file.type.match('image.*') )
                        return;
                    var reader = new FileReader();
                    reader.onload = function(event) {
                        var dataurl = event.target.result;
                        insert_image_wysiwyg( dataurl, file.name );
                    };
                    // Read in the image file as a data URL
                    reader.readAsDataURL( file );
                };
                $fileuploader = $('<input type="file" />')
                                    .attr('draggable','true')
                                    .css({position: 'absolute',
                                            left: 0,
                                            top: 0,
                                            width: '100%',
                                            height: '100%',
                                            opacity: 0,
                                            cursor: 'pointer'})
                                    .change(function(event){
                                        var files = event.target.files; // FileList object
                                        for(var i=0; i < files.length; ++i)
                                            loadImageFromFile( files[i] );
                                    })
                                    .on('dragover',function(event){
                                        event.originalEvent.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
                                        event.stopPropagation();
                                        event.preventDefault();
                                        return false;
                                    })
                                    .on('drop', function(event){
                                        var files = event.originalEvent.dataTransfer.files; // FileList object.
                                        for(var i=0; i < files.length; ++i)
                                            loadImageFromFile( files[i] );
                                        event.stopPropagation();
                                        event.preventDefault();
                                        return false;
                                    });
            }
            else if( onImageUpload )
            {
                // Upload image to a server
                var $input = $('<input type="file" />')
                                        .css({position: 'absolute',
                                              left: 0,
                                              top: 0,
                                              width: '100%',
                                              height: '100%',
                                              opacity: 0,
                                              cursor: 'pointer'})
                                        .change(function(event){
                                            onImageUpload.call( this, insert_image_wysiwyg );
                                        });
                $fileuploader = $('<form/>').append($input);
            }
            if( $fileuploader )
                $('<div/>').addClass( 'wysiwyg-browse' )
                           .html( label_dropfileclick )
                           .append( $fileuploader )
                           .appendTo( $content );
            // Add image via 'URL'
            var $button = toolbar_button( toolbar_submit );
            var $inputurl = $('<input type="text" value=""' + (placeholder_url ? ' placeholder="'+placeholder_url+'"' : '') + ' />').addClass('wysiwyg-input')
                                .keypress(function(event){
                                    if( event.which == 10 || event.which == 13 )
                                        insert_image_wysiwyg( $inputurl.val() );
                                });
            var $okaybutton = $button.click(function(event){
                                    insert_image_wysiwyg( $inputurl.val() );
                                    event.stopPropagation();
                                    event.preventDefault();
                                    return false;
                                });
            $content.append( $('<div/>').append($inputurl).append($okaybutton) );
            return $content;
        };

        // Content: Color palette
        var content_colorpalette = function( wysiwygeditor, forecolor )
        {
            var $content = $('<table/>')
                            .attr('cellpadding','0')
                            .attr('cellspacing','0')
                            .attr('unselectable','on');
            for( var row=1; row < 15; ++row ) // should be '16' - but last line looks so dark
            {
                var $rows = $('<tr/>');
                for( var col=0; col < 25; ++col ) // last column is grayscale
                {
                    var color;
                    if( col == 24 )
                    {
                        var gray = Math.floor(255 / 13 * (14 - row)).toString(16);
                        var hexg = (gray.length < 2 ? '0' : '') + gray;
                        color = '#' + hexg + hexg + hexg;
                    }
                    else
                    {
                        var hue        = col / 24;
                        var saturation = row <= 8 ? row     /8 : 1;
                        var value      = row  > 8 ? (16-row)/8 : 1;
                        color = HSVtoRGB( hue, saturation, value );
                    }
                    $('<td/>').addClass('wysiwyg-toolbar-color')
                              .attr('title', color)
                              .attr('unselectable','on')
                              .css({backgroundColor: color})
                              .click(function(){
                                  var color = this.title;
                                  if( forecolor )
                                      wysiwygeditor.forecolor( color ).closePopup().collapseSelection();
                                  else
                                      wysiwygeditor.highlight( color ).closePopup().collapseSelection();
                                  return false;
                              })
                              .appendTo( $rows );
                }
                $content.append( $rows );
            }
            return $content;
        };

        // Handlers
        var get_toolbar_handler = function( name, popup_callback )
        {
            switch( name )
            {
                case 'insertimage':
                    if( ! popup_callback )
                        return null;
                    return function( target ) {
                        popup_callback( content_insertimage(wysiwygeditor), target );
                    };
                case 'insertlink':
                    if( ! popup_callback )
                        return null;
                    return function( target ) {
                        popup_callback( content_insertlink(wysiwygeditor), target );
                    };
                case 'bold':
                    return function() {
                        wysiwygeditor.bold(); // .closePopup().collapseSelection()
                    };
                case 'italic':
                    return function() {
                        wysiwygeditor.italic(); // .closePopup().collapseSelection()
                    };
                case 'underline':
                    return function() {
                        wysiwygeditor.underline(); // .closePopup().collapseSelection()
                    };
                case 'strikethrough':
                    return function() {
                        wysiwygeditor.strikethrough(); // .closePopup().collapseSelection()
                    };
                case 'forecolor':
                    if( ! popup_callback )
                        return null;
                    return function( target ) {
                        popup_callback( content_colorpalette(wysiwygeditor,true), target );
                    };
                case 'highlight':
                    if( ! popup_callback )
                        return null;
                    return function( target ) {
                        popup_callback( content_colorpalette(wysiwygeditor,false), target );
                    };
                case 'alignleft':
                    return function() {
                        wysiwygeditor.align('left'); // .closePopup().collapseSelection()
                    };
                case 'aligncenter':
                    return function() {
                        wysiwygeditor.align('center'); // .closePopup().collapseSelection()
                    };
                case 'alignright':
                    return function() {
                        wysiwygeditor.align('right'); // .closePopup().collapseSelection()
                    };
                case 'alignjustify':
                    return function() {
                        wysiwygeditor.align('justify'); // .closePopup().collapseSelection()
                    };
                case 'subscript':
                    return function() {
                        wysiwygeditor.subscript(); // .closePopup().collapseSelection()
                    };
                case 'superscript':
                    return function() {
                        wysiwygeditor.superscript(); // .closePopup().collapseSelection()
                    };
                case 'indent':
                    return function() {
                        wysiwygeditor.indent(); // .closePopup().collapseSelection()
                    };
                case 'outdent':
                    return function() {
                        wysiwygeditor.indent(true); // .closePopup().collapseSelection()
                    };
                case 'orderedList':
                    return function() {
                        wysiwygeditor.insertList(true); // .closePopup().collapseSelection()
                    };
                case 'unorderedList':
                    return function() {
                        wysiwygeditor.insertList(); // .closePopup().collapseSelection()
                    };
                case 'removeformat':
                    return function() {
                        wysiwygeditor.removeFormat().closePopup().collapseSelection();
                    };
            }
            return null;
        }

        // Create the toolbar
        var toolbar_button = function( button ) {
            return $('<a/>').addClass( 'wysiwyg-toolbar-icon' )
                            .attr('href','#')
                            .attr('title', button.title)
                            .attr('unselectable','on')
                            .append(button.image);
        };
        var add_buttons_to_toolbar = function( $toolbar, selection, popup_open_callback, popup_position_callback )
        {
            $.each( toolbar_buttons, function(key, value) {
                if( ! value )
                    return ;
                // Skip buttons on the toolbar
                if( selection === false && 'showstatic' in value && ! value.showstatic )
                    return ;
                // Skip buttons on selection
                if( selection === true && 'showselection' in value && ! value.showselection )
                    return ;
                // Click handler
                var toolbar_handler;
                if( 'click' in value )
                    toolbar_handler = function( target ) {
                        value.click( $(target) );
                    };
                else if( 'popup' in value )
                    toolbar_handler = function( target ) {
                        var $popup = popup_open_callback();
                        var apply_position = value.popup( $popup, $(target), $container );
                        if( apply_position !== false )
                            popup_position_callback( $popup, target );
                    };
                else
                    toolbar_handler = get_toolbar_handler( key, function( $content, target ) {
                        var $popup = popup_open_callback();
                        $popup.append( $content );
                        popup_position_callback( $popup, target );
                        $popup.find('input[type=text]:first').focus();
                    });
                // Create the toolbar button
                var $button;
                if( toolbar_handler )
                    $button = toolbar_button( value ).click( function(event) {
                        toolbar_handler( event.currentTarget );
                        // Give the focus back to the editor. Technically not necessary
                        if( get_toolbar_handler(key) ) // only if not a popup-handler
                            wysiwygeditor.getElement().focus();
                        event.stopPropagation();
                        event.preventDefault();
                        return false;
                    });
                else if( value.html )
                    $button = $(value.html);
                if( $button )
                    $toolbar.append( $button );
            });
        };
        var fixed_parent = function()
        {
            var parent_fixed = false;
            $(wysiwygeditor.getElement()).parents().each(function(index,element){
                if( $(element).css('position') == 'fixed' )
                {
                    parent_fixed = true;
                    return false;
                }
            });
            return parent_fixed;
        };
        var fixed_offset = function( $element )
        {
            //$.offset() does not work with Safari 3 and 'position:fixed'
            var offset = {
                left: 0,
                top: 0
            };
            var node = $element.get(0);
            while( node )
            {
                offset.left += node.offsetLeft;
                offset.top += node.offsetTop;
                node = node.offsetParent;
            }
            return offset;
        };


        // Transform the textarea to contenteditable
        var hotkeys = {};
        var create_wysiwyg = function( $textarea, $container, placeholder )
        {
            var option = {
                element: $textarea.get(0),
                onkeypress: function( code, character, shiftKey, altKey, ctrlKey, metaKey )
                    {
                        if( onKeyEnter && (code == 10 || code == 13) && !shiftKey && !altKey && !ctrlKey && !metaKey )
                            return onKeyEnter.call( wysiwygeditor.getElement() );
                        // Exec hotkey
                        if( character && !shiftKey && !altKey && ctrlKey && !metaKey )
                        {
                            var hotkey = character.toLowerCase();
                            if( ! hotkeys[hotkey] )
                                return ;
                            hotkeys[hotkey]();
                            return false; // prevent default
                        }
                    },
                onselection: function( collapsed, rect, nodes, rightclick )
                    {
                        var show_toolbar = true,
                            $special_toolbar = null;
                        // Click on a link?
                        if( nodes.length == 1 && $(nodes[0]).parents('a').length != 0 ) // nodes is not a sparse array
                            $special_toolbar = content_insertlink( wysiwygeditor, $(nodes[0]).parents('a:first') );
                        // A right-click always opens the toolbar
                        else if( rightclick )
                            ;
                        // No selection-toolbar wanted?
                        else if( toolbar_position != 'selection' && toolbar_position != 'top-selection' && toolbar_position != 'bottom-selection' )
                            show_toolbar = false;
                        // Selected toolbar wanted, but nothing selected (=selection collapsed)
                        else if( rect === undefined || collapsed )
                            show_toolbar = false;
                        // Only one image? Better: Display a special image-toolbar
                        else if( nodes.length == 1 && nodes[0].nodeName == 'IMG' ) // nodes is not a sparse array
                            show_toolbar = false;
                        if( ! show_toolbar )
                        {
                            wysiwygeditor.closePopup();
                            return ;
                        }
                        // Apply position
                        var $toolbar;
                        var apply_toolbar_position = function()
                        {
                            var offset = fixed_offset($(wysiwygeditor.getElement()));
                            var toolbar_width = $toolbar.outerWidth();
                            // Point is the center of the selection
                            var left = offset.left + rect.left + parseInt(rect.width / 2) - parseInt(toolbar_width / 2);
                            var top = offset.top + rect.top + rect.height;
                            // Trim to viewport
                            var viewport_width = $(window).width();
                            if( left + toolbar_width > viewport_width - 1 )
                                left = viewport_width - toolbar_width - 1;
                            var scroll_left = fixed_parent() ? 0 : $(window).scrollLeft();
                            if( left < scroll_left + 1 )
                                left = scroll_left + 1;
                            $toolbar.css({ left: left + 'px',
                                           top: top + 'px',
                                           overflow: 'visible' });
                        };
                        // Open popup
                        $toolbar = $(wysiwygeditor.openPopup());
                        // if wrong popup -> create a new one
                        if( $toolbar.hasClass('wysiwyg-popup') && ! $toolbar.hasClass('wysiwyg-arrowtop') )
                            $toolbar = $(wysiwygeditor.closePopup().openPopup());
                        if( ! $toolbar.hasClass('wysiwyg-popup') )
                        {
                            // add classes + buttons
                            $toolbar.addClass( 'wysiwyg-popup wysiwyg-arrowtop' )
                                    .css('position', fixed_parent() ? 'fixed' : 'absolute' );
                            if( $special_toolbar )
                                $toolbar.empty().append( $special_toolbar );
                            else
                                add_buttons_to_toolbar( $toolbar, true,
                                    function() {
                                        return $toolbar.empty();
                                    },
                                    function( $popup ) {
                                        apply_toolbar_position();
                                    });
                        }
                        // Toolbar position
                        apply_toolbar_position();
                    },
                hijackcontextmenu: (toolbar_position == 'selection')
            };
            if( placeholder )
            {
                var $placeholder = $('<div/>').addClass( 'wysiwyg-placeholder' )
                                              .html( placeholder )
                                              .hide();
                $container.prepend( $placeholder );
                option.onplaceholder = function( visible ) {
                    if( visible )
                        $placeholder.show();
                    else
                        $placeholder.hide();
                };
            }

            var wysiwygeditor = wysiwyg( option );
            return wysiwygeditor;
        }


        // Create a container
        var $container = $('<div/>').addClass('wysiwyg-container');
        if( classes )
            $container.addClass( classes );
        $textarea.wrap( $container );
        $container = $textarea.parent( '.wysiwyg-container' );

        // Create the editor-wrapper if placeholder
        var $wrapper = false;
        if( placeholder )
        {
            $wrapper = $('<div/>').addClass('wysiwyg-wrapper')
                                  .click(function(){     // Clicking the placeholder focus editor - fixes IE6-IE8
                                     wysiwygeditor.getElement().focus();
                                  });
            $textarea.wrap( $wrapper );
            $wrapper = $textarea.parent( '.wysiwyg-wrapper' );
        }

        // Create the WYSIWYG Editor
        var wysiwygeditor = create_wysiwyg( $textarea, placeholder ? $wrapper : $container, placeholder );
        if( wysiwygeditor.legacy )
        {
            var $textarea = $(wysiwygeditor.getElement());
            $textarea.addClass( 'wysiwyg-textarea' );
            if( $textarea.is(':visible') ) // inside the DOM
                $textarea.width( $container.width() - ($textarea.outerWidth() - $textarea.width()) );
        }
        else
            $(wysiwygeditor.getElement()).addClass( 'wysiwyg-editor' );

        // Hotkey+Commands-List
        var commands = {};
        $.each( toolbar_buttons, function(key, value) {
            if( ! value || ! value.hotkey )
                return ;
            var toolbar_handler = get_toolbar_handler( key );
            if( ! toolbar_handler )
                return ;
            hotkeys[value.hotkey.toLowerCase()] = toolbar_handler;
            commands[key] = toolbar_handler;
        });

        // Toolbar on top or bottom
        if( toolbar_position != 'selection' )
        {
            var toolbar_top = toolbar_position == 'top' || toolbar_position == 'top-selection';
            var $toolbar = $('<div/>').addClass( 'wysiwyg-toolbar' ).addClass( toolbar_top ? 'wysiwyg-toolbar-top' : 'wysiwyg-toolbar-bottom' );
            add_buttons_to_toolbar( $toolbar, false,
                function() {
                    // Open a popup from the toolbar
                    var $popup = $(wysiwygeditor.openPopup());
                    // if wrong popup -> create a new one
                    if( $popup.hasClass('wysiwyg-popup') && $popup.hasClass('wysiwyg-arrowtop') )
                        $popup = $(wysiwygeditor.closePopup().openPopup());
                    if( ! $popup.hasClass('wysiwyg-popup') )
                    {
                        // add classes + content
                        $popup.addClass( 'wysiwyg-popup' )
                              .css('position', fixed_parent() ? 'fixed' : 'absolute' );
                    }
                    return $popup;
                },
                function( $popup, target ) {
                    // Popup position
                    var $button = $(target);
                    var popup_width = $popup.outerWidth();
                    // Point is the top/bottom-center of the button
                    var offset = fixed_offset($button);
                    var left = offset.left + parseInt($button.width() / 2) - parseInt(popup_width / 2);
                    var top = offset.top;
                    if( toolbar_top )
                        top += $button.outerHeight();
                    else
                        top -= $popup.height();
                    // Trim left to viewport
                    var viewport_width = $(window).width();
                    if( left + popup_width > viewport_width - 1 )
                        left = viewport_width - popup_width - 1;
                    var scroll_left = fixed_parent() ? 0 : $(window).scrollLeft();
                    if( left < scroll_left + 1 )
                        left = scroll_left + 1;
                    $popup.css({ left: left + 'px',
                                 top: top + 'px',
                                 overflow: 'visible'
                               });
                });
            if( toolbar_top )
                $container.prepend( $toolbar );
            else
                $container.append( $toolbar );
        }

        // Export userdata
        return {
            wysiwygeditor: wysiwygeditor,
            commands: commands
        };
    };

    // jQuery Interface
    $.fn.wysiwyg = function( option, param )
    {
        if( ! option || typeof(option) === 'object' )
        {
            option = $.extend( {}, option );
            return this.each(function() {
                var $that = $(this);
                // Already an editor
                if( $that.data( 'wysiwyg') )
                    return ;

                // Two modes: toolbar on top and on bottom
                var classes = option.classes,
                    placeholder = option.placeholder || $that.attr('placeholder'),
                    toolbar_position = (option.position && (option.position == 'top' || option.position == 'top-selection' || option.position == 'bottom' || option.position == 'bottom-selection' || option.position == 'selection')) ? option.position : 'top-selection',
                    toolbar_buttons = option.buttons,
                    toolbar_submit = option.submit,
                    label_dropfileclick = option.dropfileclick,
                    placeholder_url = option.placeholderUrl || null,
                    max_imagesize = option.maxImageSize || null,
                    onImageUpload = option.onImageUpload,
                    onKeyEnter = option.onKeyEnter;

                // Create the WYSIWYG Editor
                var data = create_editor( $that, classes, placeholder, toolbar_position, toolbar_buttons, toolbar_submit, label_dropfileclick,
                                          placeholder_url, max_imagesize, onImageUpload, onKeyEnter );
                $that.data( 'wysiwyg', data );
            });
        }
        else if( this.length == 1 )
        {
            var $that = $(this);
            var data = $that.data('wysiwyg');
            if( ! data )
                return false;
            if( option == 'html' )
            {
                if( typeof(param) != 'undefined' )
                    data.wysiwygeditor.setHTML( param );
                else
                    return data.wysiwygeditor.getHTML();
            }
            else if( option == 'selected-html' ) {
                return data.wysiwygeditor.getSelectedHTML();
            }
            else if( option == 'close-popup' ) {
                data.wysiwygeditor.closePopup().collapseSelection();
            }
            else if( option == 'forecolor' ) {
                data.wysiwygeditor.forecolor( param );
            }
            else if( option == 'highlight' ) {
                data.wysiwygeditor.highlight( param );
            }
            else if( option == 'format' ) {
                data.wysiwygeditor.format( param );
            }
            else if( option == 'fontname' ) {
                data.wysiwygeditor.fontName( param );
            }
            else if( option == 'fontsize' ) {
                data.wysiwygeditor.fontSize( param );
            }
            else if( option == 'insertlink' ) {
                wysiwygeditor_insertLink(data.wysiwygeditor,param);
            }
            else if( option == 'insertimage' ) {
                data.wysiwygeditor.insertImage( param );
            }
            else if( option == 'inserthtml' ) {
                data.wysiwygeditor.insertHTML( param );
            }
            else if( data.commands[option] )
                data.commands[option]( param );
            return this;
        }
        return false;
    };
})(window, document, jQuery);
