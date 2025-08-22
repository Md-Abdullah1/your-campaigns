module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/redux/Slices/AuthSlice.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    user: null,
    token: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null,
    isLoading: false,
    error: null,
    isAuthenticated: false
};
const authSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
"[project]/src/redux/Slices/CampaignSlice.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    list: [],
    current: null,
    isLoading: false,
    error: null
};
const campaignSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
"[project]/src/redux/Slices/KpiSlice.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
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
const kpiSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
"[project]/src/redux/Slices/LeadsSlice.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/src/redux/store/store.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$Slices$2f$AuthSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/Slices/AuthSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$Slices$2f$CampaignSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/Slices/CampaignSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$Slices$2f$KpiSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/Slices/KpiSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$Slices$2f$LeadsSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/Slices/LeadsSlice.js [app-ssr] (ecmascript)");
;
;
;
;
;
const makeStore = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
        reducer: {
            auth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$Slices$2f$AuthSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
            campaigns: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$Slices$2f$CampaignSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
            kpi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$Slices$2f$KpiSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
            leads: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$Slices$2f$LeadsSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
        }
    });
};
const store = makeStore();
const RootState = store.getState;
const AppDispatch = store.dispatch;
}),
"[project]/src/app/Providers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$store$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/store/store.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$store$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"],
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/Providers.js",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__58524e6b._.js.map