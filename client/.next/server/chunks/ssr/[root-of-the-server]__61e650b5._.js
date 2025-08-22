module.exports = [
"[project]/.next-internal/server/app/campaigns/[id]/leads/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/src/redux/Slices/AuthSlice.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/store/authSlice.js
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "logout",
    ()=>logout,
    "setAuthFail",
    ()=>setAuthFail,
    "setAuthSuccess",
    ()=>setAuthSuccess,
    "setLoading",
    ()=>setLoading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-rsc] (ecmascript) <locals>");
;
const initialState = {
    user: null,
    token: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null,
    isLoading: false,
    error: null,
    isAuthenticated: false
};
const authSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "auth",
    initialState,
    reducers: {
        setLoading: (state)=>{
            state.isLoading = true;
            state.error = null;
        },
        setAuthSuccess: (state, action)=>{
            state.isLoading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.error = null;
            // Save to localStorage
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        },
        setAuthFail: (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
            state.token = null;
            state.user = null;
            state.isAuthenticated = false;
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        },
        logout: (state)=>{
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            state.error = null;
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        }
    }
});
const { setLoading, setAuthSuccess, setAuthFail, logout } = authSlice.actions;
const __TURBOPACK__default__export__ = authSlice.reducer;
}),
"[project]/src/redux/Slices/CampaignSlice.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/store/campaignSlice.js
__turbopack_context__.s([
    "clearCurrent",
    ()=>clearCurrent,
    "createSuccess",
    ()=>createSuccess,
    "default",
    ()=>__TURBOPACK__default__export__,
    "deleteSuccess",
    ()=>deleteSuccess,
    "fetchSuccess",
    ()=>fetchSuccess,
    "setCurrent",
    ()=>setCurrent,
    "setError",
    ()=>setError,
    "setLoading",
    ()=>setLoading,
    "updateSuccess",
    ()=>updateSuccess
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-rsc] (ecmascript) <locals>");
;
const initialState = {
    list: [],
    current: null,
    isLoading: false,
    error: null
};
const campaignSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "campaigns",
    initialState,
    reducers: {
        // Set loading state
        setLoading: (state)=>{
            state.isLoading = true;
            state.error = null;
        },
        // On successful fetch
        fetchSuccess: (state, action)=>{
            state.isLoading = false;
            state.list = action.payload;
            state.error = null;
        },
        // On fetch/create/update/delete fail
        setError: (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        },
        // Add new campaign to list
        createSuccess: (state, action)=>{
            state.isLoading = false;
            state.list.push(action.payload);
            state.error = null;
        },
        // Update existing campaign
        updateSuccess: (state, action)=>{
            state.isLoading = false;
            const index = state.list.findIndex((c)=>c._id === action.payload._id);
            if (index !== -1) {
                state.list[index] = action.payload;
            }
            state.current = null;
        },
        // Remove campaign
        deleteSuccess: (state, action)=>{
            state.list = state.list.filter((c)=>c._id !== action.payload);
        },
        // Set current campaign (for edit)
        setCurrent: (state, action)=>{
            state.current = action.payload;
        },
        // Clear current
        clearCurrent: (state)=>{
            state.current = null;
        }
    }
});
const { setLoading, fetchSuccess, setError, createSuccess, updateSuccess, deleteSuccess, setCurrent, clearCurrent } = campaignSlice.actions;
const __TURBOPACK__default__export__ = campaignSlice.reducer;
}),
"[project]/src/redux/Slices/KpiSlice.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/store/kpiSlice.js
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "setChartData",
    ()=>setChartData,
    "setError",
    ()=>setError,
    "setKPIData",
    ()=>setKPIData,
    "setLoading",
    ()=>setLoading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-rsc] (ecmascript) <locals>");
;
const initialState = {
    totalCampaigns: 0,
    activeCampaigns: 0,
    totalSpend: 0,
    totalConversions: 0,
    chartData: {
        labels: [],
        datasets: [
            {
                label: "Conversions",
                data: [],
                borderColor: "#3b82f6",
                backgroundColor: "rgba(59, 130, 246, 0.1)"
            }
        ]
    },
    isLoading: false,
    error: null
};
const kpiSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "kpi",
    initialState,
    reducers: {
        setLoading: (state)=>{
            state.isLoading = true;
        },
        setKPIData: (state, action)=>{
            state.isLoading = false;
            state.totalCampaigns = action.payload.totalCampaigns;
            state.activeCampaigns = action.payload.activeCampaigns;
            state.totalSpend = action.payload.totalSpend;
            state.totalConversions = action.payload.totalConversions;
            state.error = null;
        },
        setChartData: (state, action)=>{
            state.chartData = action.payload;
        },
        setError: (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});
const { setLoading, setKPIData, setChartData, setError } = kpiSlice.actions;
const __TURBOPACK__default__export__ = kpiSlice.reducer;
}),
"[project]/src/redux/Slices/LeadsSlice.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/redux/Slices/LeadsSlice.js
__turbopack_context__.s([
    "clearLeads",
    ()=>clearLeads,
    "createSuccess",
    ()=>createSuccess,
    "default",
    ()=>__TURBOPACK__default__export__,
    "fetchSuccess",
    ()=>fetchSuccess,
    "setError",
    ()=>setError,
    "setLoading",
    ()=>setLoading,
    "updateSuccess",
    ()=>updateSuccess
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-rsc] (ecmascript) <locals>");
;
const initialState = {
    list: [],
    isLoading: false,
    error: null
};
const leadSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "leads",
    initialState,
    reducers: {
        setLoading: (state)=>{
            state.isLoading = true;
            state.error = null;
        },
        fetchSuccess: (state, action)=>{
            state.isLoading = false;
            state.list = action.payload;
            state.error = null;
        },
        createSuccess: (state, action)=>{
            state.isLoading = false;
            state.list.push(action.payload);
        },
        updateSuccess: (state, action)=>{
            state.isLoading = false;
            const index = state.list.findIndex((l)=>l.id === action.payload.id);
            if (index !== -1) {
                state.list[index] = action.payload;
            }
        },
        setError: (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        },
        clearLeads: (state)=>{
            state.list = [];
        }
    }
});
const { setLoading, fetchSuccess, createSuccess, updateSuccess, setError, clearLeads } = leadSlice.actions;
const __TURBOPACK__default__export__ = leadSlice.reducer;
}),
"[project]/src/redux/store/store.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/store/store.js
__turbopack_context__.s([
    "AppDispatch",
    ()=>AppDispatch,
    "RootState",
    ()=>RootState,
    "makeStore",
    ()=>makeStore,
    "store",
    ()=>store
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$Slices$2f$AuthSlice$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/Slices/AuthSlice.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$Slices$2f$CampaignSlice$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/Slices/CampaignSlice.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$Slices$2f$KpiSlice$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/Slices/KpiSlice.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$Slices$2f$LeadsSlice$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/Slices/LeadsSlice.js [app-rsc] (ecmascript)");
;
;
;
;
;
const makeStore = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
        reducer: {
            auth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$Slices$2f$AuthSlice$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
            campaigns: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$Slices$2f$CampaignSlice$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
            kpi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$Slices$2f$KpiSlice$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
            leads: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$Slices$2f$LeadsSlice$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
        }
    });
};
const store = makeStore();
const RootState = store.getState;
const AppDispatch = store.dispatch;
}),
"[project]/src/redux/store/hooks.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/store/hooks.js
__turbopack_context__.s([
    "useAppDispatch",
    ()=>useAppDispatch,
    "useAppSelector",
    ()=>useAppSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$rsc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/rsc.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$store$2f$store$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/store/store.js [app-rsc] (ecmascript)");
;
;
const useAppDispatch = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$rsc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useDispatch"])();
const useAppSelector = (fn)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$rsc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useSelector"])(fn);
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/src/services/apiClient.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/services/apiClient.js
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-rsc] (ecmascript)");
;
const API_BASE_URL = 'http://localhost:5000/api'; // Change if needed
// Create basic Axios instance without interceptor
const apiClient = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});
const __TURBOPACK__default__export__ = apiClient;
}),
"[project]/src/helpers/GetAuthHeaders.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Helper to get auth headers
__turbopack_context__.s([
    "getAuthHeaders",
    ()=>getAuthHeaders
]);
const getAuthHeaders = ()=>{
    const token = localStorage.getItem("token");
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    };
};
}),
"[project]/src/services/leadService.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/services/leadService.js
__turbopack_context__.s([
    "getAllLeads",
    ()=>getAllLeads,
    "getLeadsByCampaign",
    ()=>getLeadsByCampaign
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/apiClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$Slices$2f$LeadsSlice$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/Slices/LeadsSlice.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$GetAuthHeaders$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/helpers/GetAuthHeaders.js [app-rsc] (ecmascript)");
;
;
;
const getLeadsByCampaign = (dispatch, campaignId)=>{
    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$Slices$2f$LeadsSlice$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setLoading"])());
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].get(`/leads/campaign/${campaignId}`, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$GetAuthHeaders$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])()).then((response)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$Slices$2f$LeadsSlice$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchSuccess"])(response.data));
    }).catch((err)=>{
        const message = err.response?.data?.message || "Failed to fetch leads";
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$Slices$2f$LeadsSlice$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setError"])(message));
    });
};
const getAllLeads = (dispatch)=>{
    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$Slices$2f$LeadsSlice$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setLoading"])());
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].get("/leads", (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$GetAuthHeaders$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])()) // GET /api/leads
    .then((response)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$Slices$2f$LeadsSlice$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchSuccess"])(response.data));
    }).catch((err)=>{
        const message = err.response?.data?.message || "Failed to fetch leads";
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$Slices$2f$LeadsSlice$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setError"])(message));
    });
};
}),
"[project]/src/app/campaigns/[id]/leads/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CampaignLeadsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$store$2f$hooks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/store/hooks.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$leadService$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/leadService.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
"use  client";
;
;
;
;
;
function CampaignLeadsPage({ params }) {
    const { id } = params;
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$store$2f$hooks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const { list: leads, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$store$2f$hooks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.leads);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$leadService$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLeadsByCampaign"])(dispatch, id);
    }, [
        dispatch,
        id
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white shadow",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto px-4 py-6 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-gray-900",
                            children: [
                                "Leads for Campaign #",
                                id
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/campaigns/[id]/leads/page.jsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: `/campaigns/${id}/edit`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-indigo-600 text-sm hover:underline",
                                children: "← Back to Campaign"
                            }, void 0, false, {
                                fileName: "[project]/src/app/campaigns/[id]/leads/page.jsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/campaigns/[id]/leads/page.jsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/campaigns/[id]/leads/page.jsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/campaigns/[id]/leads/page.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                children: [
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 p-3 bg-red-100 border border-red-200 text-red-700 rounded text-sm",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/app/campaigns/[id]/leads/page.jsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this),
                    isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "Loading leads..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/campaigns/[id]/leads/page.jsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/campaigns/[id]/leads/page.jsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this) : leads.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "No leads yet for this campaign."
                        }, void 0, false, {
                            fileName: "[project]/src/app/campaigns/[id]/leads/page.jsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/campaigns/[id]/leads/page.jsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white shadow overflow-hidden sm:rounded-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "min-w-full divide-y divide-gray-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-gray-50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                children: "Name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/campaigns/[id]/leads/page.jsx",
                                                lineNumber: 55,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                children: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/campaigns/[id]/leads/page.jsx",
                                                lineNumber: 58,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                children: "Phone"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/campaigns/[id]/leads/page.jsx",
                                                lineNumber: 61,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/campaigns/[id]/leads/page.jsx",
                                                lineNumber: 64,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                children: "Source"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/campaigns/[id]/leads/page.jsx",
                                                lineNumber: 67,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/campaigns/[id]/leads/page.jsx",
                                        lineNumber: 54,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/campaigns/[id]/leads/page.jsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "bg-white divide-y divide-gray-200",
                                    children: leads.map((lead)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-gray-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",
                                                    children: lead.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/campaigns/[id]/leads/page.jsx",
                                                    lineNumber: 75,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                                    children: lead.email
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/campaigns/[id]/leads/page.jsx",
                                                    lineNumber: 78,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                                    children: lead.phone || "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/campaigns/[id]/leads/page.jsx",
                                                    lineNumber: 81,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 whitespace-nowrap",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `inline-flex px-2 text-xs leading-5 font-semibold rounded-full ${lead.status === "new" ? "bg-yellow-100 text-yellow-800" : lead.status === "contacted" ? "bg-blue-100 text-blue-800" : lead.status === "qualified" ? "bg-indigo-100 text-indigo-800" : lead.status === "converted" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`,
                                                        children: lead.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/campaigns/[id]/leads/page.jsx",
                                                        lineNumber: 85,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/campaigns/[id]/leads/page.jsx",
                                                    lineNumber: 84,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                                    children: lead.source
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/campaigns/[id]/leads/page.jsx",
                                                    lineNumber: 101,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, lead.id, true, {
                                            fileName: "[project]/src/app/campaigns/[id]/leads/page.jsx",
                                            lineNumber: 74,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/campaigns/[id]/leads/page.jsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/campaigns/[id]/leads/page.jsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/campaigns/[id]/leads/page.jsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/campaigns/[id]/leads/page.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/campaigns/[id]/leads/page.jsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/campaigns/[id]/leads/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/campaigns/[id]/leads/page.jsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__61e650b5._.js.map