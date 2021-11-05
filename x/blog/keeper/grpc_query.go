package keeper

import (
	"github.com/coreators/planet/x/blog/types"
)

var _ types.QueryServer = Keeper{}
