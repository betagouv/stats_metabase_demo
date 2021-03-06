var ORDER = 1;
var SESSION_ID = "";
var VERSION = 1;

//export function track(page, action, meta={}) {
function track(page, action, meta={}) {
    meta.descriptor = 'demo';
    const body = computeRequestBody(page, action, meta);
    
    if (typeof window !== 'undefined'   ) {
        fetch('http://localhost:5000/track', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
    }
}


// export const Steps = {
const Steps = {
    LOAD: 'load',
    CLICK: 'click',
    SCROLL: 'scroll'
}


function computeRequestBody(page, action, metaIn) {
    const timeNow = new Date();
    // Optionnaly add meta data (in key/value pairs) from url query stirng
    const meta = Object.assign(metaIn, getUrlMeta());

    return {
        _v:VERSION,
        timestamp: timeNow.toISOString(),
        order: ORDER += 1,
        session_id: getSessionId(),
        page: page,
        action: action,
        meta: JSON.stringify(meta),
        client_context: {},
        server_context: {}
    }
}


function uuidv4() {
  try {
      return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ ( crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
      );
  } catch {
      return 'ANONYMOUS';
  }
}

//export function getSessionId() {
function getSessionId() {
    if (SESSION_ID === "")
        if (typeof document !== `undefined`) {
            SESSION_ID = (new URL(document.location)).searchParams.get('sid') || uuidv4();
        }
        else {
            SESSION_ID = uuidv4();
        }
        uuidv4();
    return SESSION_ID;
}

function getUrlMeta() {
    // Avoid using JSON and interpreting user-provided values
    var meta = {};
    const doc = typeof document !== `undefined` ? document : null;
    try {
        const check = (new URL(doc.location)).searchParams.get('t');
        const split1 = check.split(';');
        for (var tuple of split1) {
            const keyval = tuple.split(':');
            const key = keyval[0].replace(/[^\-_0-9a-zA-Z]/g,'');
            const val = keyval[1].replace(/[^\-_0-9a-zA-Z]/g,'');
            meta[key] = val;
        }
    } finally {
        return meta;
    }
}
